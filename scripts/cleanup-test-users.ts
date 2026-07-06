/**
 * Supabase Auth user cleanup script.
 *
 * Usage:
 *   npx tsx scripts/cleanup-test-users.ts --list       # list all users
 *   npx tsx scripts/cleanup-test-users.ts --delete-all  # delete ALL users (CAREFUL)
 *   npx tsx scripts/cleanup-test-users.ts --keep data@viloresearchgroup.com --delete
 *
 * Requires SUPABASE_SERVICE_ROLE_KEY and NEXT_PUBLIC_SUPABASE_URL in .env.local.
 */

import { createClient } from "@supabase/supabase-js";
import { config } from "dotenv";
import { resolve } from "path";

config({ path: resolve(process.cwd(), ".env.local") });

const url = process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.SUPABASE_URL;
const key = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_SECRET_KEY;

if (!url || !key) {
  console.error(
    "Missing Supabase URL or service key. Tried NEXT_PUBLIC_SUPABASE_URL/SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY/SUPABASE_SECRET_KEY",
  );
  process.exit(1);
}

const supabase = createClient(url, key, {
  auth: { persistSession: false, autoRefreshToken: false },
});

interface AuthUser {
  id: string;
  email: string | null;
  created_at: string;
  last_sign_in_at: string | null;
}

async function listUsers(): Promise<AuthUser[]> {
  const { data, error } = await supabase.auth.admin.listUsers();
  if (error) {
    console.error("Failed to list users:", error.message);
    process.exit(1);
  }
  return (data.users ?? []) as unknown as AuthUser[];
}

async function deleteUser(id: string, email: string | null) {
  const { error } = await supabase.auth.admin.deleteUser(id);
  if (error) {
    console.error(`  ❌ Failed to delete ${email ?? id}: ${error.message}`);
  } else {
    console.log(`  ✅ Deleted ${email ?? id}`);
  }
}

async function main() {
  const args = process.argv.slice(2);
  const listOnly = args.includes("--list");
  const deleteAll = args.includes("--delete-all");
  const keepIdx = args.indexOf("--keep");
  const keepEmail = keepIdx >= 0 ? args[keepIdx + 1] : null;
  const shouldDelete = args.includes("--delete") || deleteAll;

  console.log("Fetching users...");
  const users = await listUsers();

  if (users.length === 0) {
    console.log("No users found.");
    return;
  }

  console.log(`\n${users.length} user(s) found:\n`);
  for (const u of users) {
    console.log(`  ${u.email ?? "(no email)"}  |  created ${u.created_at?.slice(0, 10)}  |  last sign-in ${u.last_sign_in_at?.slice(0, 10) ?? "never"}`);
  }

  if (listOnly || !shouldDelete) {
    if (!listOnly) {
      console.log('\nUse --delete to remove test users, or --delete-all to delete everyone.');
      console.log('Add --keep email@example.com to preserve a specific user.');
    }
    return;
  }

  const toDelete = deleteAll
    ? users
    : users.filter((u) => !keepEmail || u.email !== keepEmail);

  if (toDelete.length === 0) {
    console.log("\nNo users to delete.");
    return;
  }

  console.log(`\n⚠️  About to delete ${toDelete.length} user(s).`);
  if (keepEmail) console.log(`   Keeping: ${keepEmail}`);

  // Safety pause
  console.log("\nPress Ctrl+C within 5 seconds to cancel...");
  await new Promise((r) => setTimeout(r, 5000));

  for (const u of toDelete) {
    await deleteUser(u.id, u.email);
  }

  console.log(`\nDone. Deleted ${toDelete.length} user(s).`);
}

main().catch(console.error);

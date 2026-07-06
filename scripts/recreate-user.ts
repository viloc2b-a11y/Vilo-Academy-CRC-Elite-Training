import { createClient } from "@supabase/supabase-js";
import { config } from "dotenv";
config({ path: ".env.local" });

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_SECRET_KEY!,
  { auth: { persistSession: false } },
);

async function main() {
  // 1. Delete corrupted user
  console.log("1. Deleting corrupted user...");
  const { error: delErr } = await supabase.auth.admin.deleteUser(
    "09a414ea-2a50-474c-adaf-7dee0e486bbf",
  );
  if (delErr) {
    console.error("Delete error:", delErr.message);
  } else {
    console.log("   Deleted.");
  }

  // 2. Create fresh user with email identity
  console.log("2. Creating user with proper email identity...");
  const { data, error } = await supabase.auth.admin.createUser({
    email: "data@viloresearchgroup.com",
    password: "Vilo2026!CRC",
    email_confirm: true,
    user_metadata: { full_name: "Vilo Research Group" },
  });

  if (error) {
    console.error("Create error:", error.message);
    return;
  }

  const u = data.user;
  console.log("   ✅ Created successfully");
  console.log("   Email:     ", u?.email);
  console.log("   ID:        ", u?.id);
  console.log("   Confirmed: ", u?.email_confirmed_at ? "YES" : "NO");
  console.log("   Providers: ", u?.identities?.map((i: any) => i.provider).join(", ") ?? "none");

  // 3. Verify identities
  console.log("\n3. Verifying identities...");
  const { data: user } = await supabase.auth.admin.getUserById(u!.id);
  console.log("   Providers: ", user?.user?.identities?.map((i: any) => i.provider).join(", ") ?? "none");
  console.log("   Confirmed: ", user?.user?.email_confirmed_at ? "YES" : "NO");

  console.log("\n✅ Ready. Login with: data@viloresearchgroup.com / Vilo2026!CRC");
}

main().catch(console.error);

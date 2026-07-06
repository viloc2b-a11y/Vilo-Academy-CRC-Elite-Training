/**
 * Supabase Auth diagnostic script.
 *
 * Usage: npx tsx scripts/auth-diag.ts
 */

import { createClient } from "@supabase/supabase-js";
import { config } from "dotenv";
import { resolve } from "path";

config({ path: resolve(process.cwd(), ".env.local") });

const url = process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.SUPABASE_URL;
const key = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_SECRET_KEY;

if (!url || !key) {
  console.error("Missing Supabase URL or service key.");
  process.exit(1);
}

const supabase = createClient(url, key, {
  auth: { persistSession: false, autoRefreshToken: false },
});

async function main() {
  // 1. List all users with full details
  console.log("=== USERS ===\n");
  const { data: users, error: listErr } = await supabase.auth.admin.listUsers();
  if (listErr) {
    console.error("Failed to list users:", listErr.message);
    return;
  }

  for (const u of users.users) {
    console.log(`Email:        ${u.email}`);
    console.log(`ID:           ${u.id}`);
    console.log(`Confirmed:    ${u.email_confirmed_at ? "YES (" + u.email_confirmed_at + ")" : "NO"}`);
    console.log(`Created:      ${u.created_at}`);
    console.log(`Last sign-in: ${u.last_sign_in_at ?? "NEVER"}`);
    console.log(`Phone:        ${u.phone ?? "none"}`);
    console.log(`Banned:       ${u.banned_until ? "YES until " + u.banned_until : "NO"}`);
    console.log(`Role:         ${u.role ?? "none"}`);
    console.log(`Providers:    ${u.identities?.map((i: any) => i.provider).join(", ") ?? "none"}`);
    console.log("");
  }

  // 2. Check auth config
  console.log("=== AUTH CONFIG ===\n");
  const { data: settings, error: settingsErr } = await supabase.auth.admin.getConfig();
  if (settingsErr) {
    console.error("Cannot read auth config (may need higher permissions):", settingsErr.message);
  } else {
    console.log(`Site URL:              ${(settings as any).SITE_URL ?? "not set"}`);
    console.log(`URI Allow List:        ${(settings as any).URI_ALLOW_LIST ?? "not set"}`);
    console.log(`Disable Signup:        ${(settings as any).DISABLE_SIGNUP ?? "false"}`);
    console.log(`Mailer Autoconfirm:    ${(settings as any).MAILER_AUTOCONFIRM ?? "false"}`);
    console.log(`Mailer Subjects Prefix: ${(settings as any).MAILER_SUBJECTS_PREFIX ?? "none"}`);
    console.log(`SMTP Host:             ${(settings as any).SMTP_HOST ?? "not set"}`);
    console.log(`SMTP Port:             ${(settings as any).SMTP_PORT ?? "not set"}`);
    console.log(`SMTP User:             ${(settings as any).SMTP_USER ?? "not set"}`);
    console.log(`SMTP Admin Email:      ${(settings as any).SMTP_ADMIN_EMAIL ?? "not set"}`);
  }

  // 3. Recommendation
  console.log("\n=== ACTIONS ===\n");

  const user = users.users[0];
  if (!user) {
    console.log("No users exist. Create an account first.");
    return;
  }

  if (!user.email_confirmed_at) {
    console.log(`⚠️  ${user.email} is NOT confirmed.`);
    console.log("   Run with --confirm to auto-confirm this user.\n");
  }

  if (user.banned_until) {
    console.log(`⛔ ${user.email} is BANNED until ${user.banned_until}.`);
    console.log("   Check Authentication → Users → Ban/Unban in Supabase Dashboard.\n");
  }

  if (!user.last_sign_in_at) {
    console.log(`⚠️  ${user.email} has NEVER signed in.`);
    console.log("   This could mean:");
    console.log("   - The password was never set properly");
    console.log("   - The user is confirmed but auth is failing silently");
    console.log("   - You may need to reset the password via Dashboard\n");
  }

  // Handle --confirm flag
  if (process.argv.includes("--confirm")) {
    if (user.email_confirmed_at) {
      console.log(`${user.email} is already confirmed.`);
    } else {
      const { error } = await supabase.auth.admin.updateUserById(user.id, {
        email_confirm: true,
      });
      if (error) {
        console.error(`Failed to confirm: ${error.message}`);
      } else {
        console.log(`✅ Confirmed ${user.email}`);
      }
    }
  }

  // Handle --reset-password flag
  if (process.argv.includes("--reset-password")) {
    const newPassword = process.argv[process.argv.indexOf("--reset-password") + 1];
    if (!newPassword) {
      console.log("Usage: --reset-password <new-password>");
    } else {
      const { error } = await supabase.auth.admin.updateUserById(user.id, {
        password: newPassword,
      });
      if (error) {
        console.error(`Failed to reset password: ${error.message}`);
      } else {
        console.log(`✅ Password reset for ${user.email} → ${newPassword}`);
      }
    }
  }
}

main().catch(console.error);

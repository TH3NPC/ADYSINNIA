// =============================================================================
//  config.js — Adyssinia AD dashboard runtime config
// =============================================================================
//  These are PUBLIC values. The anon key is a public key: it is safe to ship in
//  this file and on a public GitHub Pages site. Row-Level Security in the
//  database is what actually protects the data (a logged-out or wrong user can
//  read nothing). NEVER put the service_role key or the DB password here.
// =============================================================================
window.AD_CONFIG = {
  SUPABASE_URL: 'https://prhgjivjfvgwsiwwbhmx.supabase.co',
  // Legacy anon JWT (works with every supabase-js v2 version).
  SUPABASE_ANON_KEY: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InByaGdqaXZqZnZnd3Npd3diaG14Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTIxODI5MTQsImV4cCI6MjEwNzc1ODkxNH0.ZQ927GAjqpO5rR81AN8u7fGRgPge9ApqUNjiXaYs3pQ',
  // Newer publishable key (same purpose). Either key works; the anon JWT above is used by default.
  SUPABASE_PUBLISHABLE_KEY: 'sb_publishable_L0fd-V19W1CBbMOEVK0viQ_JrsYrNVZ',
  // Your Telegram bot's @username (without the @) — used for the "Connect
  // Telegram" deep link. Set this to the bot you made with @BotFather.
  TELEGRAM_BOT_USERNAME: '@Adyssiniaadbot'
};

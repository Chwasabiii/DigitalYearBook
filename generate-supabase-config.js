const fs = require('fs');
const path = require('path');

const envPath = path.resolve(__dirname, '.env');
const outPath = path.resolve(__dirname, 'supabase-config.js');

function parseEnv(contents) {
  const result = {};
  for (const line of contents.split(/\r?\n/)) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;
    const [key, ...rest] = trimmed.split('=');
    if (!key) continue;
    result[key.trim()] = rest.join('=').trim().replace(/^"|"$/g, '');
  }
  return result;
}

let env = {};
try {
  env = parseEnv(fs.readFileSync(envPath, 'utf8'));
} catch (error) {
  console.warn('.env file not found or could not be read. Using defaults in supabase-config.js.');
}

const url = env.SUPABASE_URL || 'https://your-project-id.supabase.co';
const anonKey = env.SUPABASE_ANON_KEY || 'YOUR_ANON_KEY';

const content = `// =============================================
//  supabase-config.js — generated from .env
// =============================================

window.SUPABASE_CONFIG = {
  url: ${JSON.stringify(url)},
  anonKey: ${JSON.stringify(anonKey)},
};
`;

fs.writeFileSync(outPath, content, 'utf8');
console.log('Generated supabase-config.js');

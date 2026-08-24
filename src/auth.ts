export async function hashPassword(password: string): Promise<string> {
  const encoder = new TextEncoder();
  const data = encoder.encode(password);
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
  return hashHex;
}

export const DEFAULT_AUTH: Record<string, string> = {
  subhasish: import.meta.env.VITE_AUTH_SUBHASISH || 'b50eadf8f1566efe7ec8bebab40a5e2c7a1cb4f60f8dd3a8271e363bb3d1fe52', // subhasish@123
  daksh: import.meta.env.VITE_AUTH_DAKSH || 'de8fdff37c54fdf09da43011d587d369c3a8c677237920d65187aa3e10edc8d9',       // daksh@123
  swayamshree: import.meta.env.VITE_AUTH_SWAYAMSHREE || '6bbf84980b4fd4b1f23a4f4248093646d2911dea7394a00835039e3cbe2369c0', // swayamshree@123
  suman: import.meta.env.VITE_AUTH_SUMAN || 'dbe91d66856dea848bba30997420ee4284367c2978bb082179dd4080c90a2b58',       // suman@123
  nuzail: import.meta.env.VITE_AUTH_NUZAIL || '53c2f95bc8d130ff77a054ec08b3fd9320437f817f0af46ca2342a6fbf4bf88e'      // nuzail@123
};

// Simple local mock for auth map since we removed Yjs for passwords
export const getAuthHash = (username: string): string => {
  const localOverrides = JSON.parse(localStorage.getItem('authOverrides') || '{}');
  return localOverrides[username] || DEFAULT_AUTH[username];
};

export const setAuthHash = (username: string, hash: string) => {
  const localOverrides = JSON.parse(localStorage.getItem('authOverrides') || '{}');
  localOverrides[username] = hash;
  localStorage.setItem('authOverrides', JSON.stringify(localOverrides));
};

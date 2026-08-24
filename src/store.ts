import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://qpqjcfimpeibfaqwzbph.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'sb_publishable_rlSMFePO6kGpqBipLzkKOQ_BNBK9ZvG';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

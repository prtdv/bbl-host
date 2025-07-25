import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://xkawyuzkrrxgrcslxyjb.supabase.co'; 
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhrYXd5dXprcnJ4Z3Jjc2x4eWpiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTMyODEwMjYsImV4cCI6MjA2ODg1NzAyNn0.RLld3ybTkf1ai9W3wyRF2E94uTp-_1Upe9Lo0uzRlYs';            

export const supabase = createClient(supabaseUrl, supabaseKey);

import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://empklglzkslpskssvxyw.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVtcGtsZ2x6a3NscHNrc3N2eHl3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTkwNDIzMTYsImV4cCI6MjAzNDYxODMxNn0.iQmD6kIrzwKTQEf_ryM_HFx7gp1cUxgVHh79I705L64';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;

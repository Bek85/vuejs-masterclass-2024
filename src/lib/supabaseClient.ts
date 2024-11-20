import { createClient } from '@supabase/supabase-js';

// Create a single supabase client for interacting with your database
export const supabase = createClient(
  'https://bkqbyveibedqpgiahaur.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJrcWJ5dmVpYmVkcXBnaWFoYXVyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzIxMDEyMDgsImV4cCI6MjA0NzY3NzIwOH0.aEcy88aLDQ834POqEvSZ-aPcBxOjeEjtsfAPKUmwXlA',
);

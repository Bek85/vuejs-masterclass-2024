import { createClient } from '@supabase/supabase-js';
import type { Database } from '@root/database/types/database.types';

// Create a single supabase client for interacting with your database
export const supabase = createClient<Database>(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY,
  {
    auth: {
      // OAuth (Google) returns a one-time ?code= that is exchanged for a session,
      // instead of putting the access token in the URL where extensions can read it.
      flowType: 'pkce',
    },
  },
);

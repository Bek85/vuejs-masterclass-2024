import type { User, Session } from '@supabase/supabase-js';
import type { Tables } from '@root/database/types/database.types';
import { profileQuery } from '@/utils/authQueries';
import { supabase } from '@/lib/supabaseClient';

export const useAuthStore = defineStore('auth-store', () => {
  const user = ref<null | User>(null);
  const profile = ref<null | Tables<'profiles'>>(null);
  const isTrackingAuthChanges = ref(false);

  const setProfile = async () => {
    if (!user.value) {
      profile.value = null;
      return;
    }

    if (!profile.value || profile.value.id !== user.value.id) {
      const { data } = await profileQuery({ column: 'id', value: user.value.id });
      profile.value = data || null;
    }
  };

  const setAuth = async (userSession: null | Session = null) => {
    if (!userSession) {
      user.value = null;
      profile.value = null;
      return;
    }

    user.value = userSession.user;
    await setProfile();
  };

  const trackAuthChanges = async () => {
    if (isTrackingAuthChanges.value) return;
    isTrackingAuthChanges.value = true;

    supabase.auth.onAuthStateChange((_, session) => {
      setTimeout(async () => {
        await setAuth(session);
      }, 0);
    });
  };

  const getSession = async () => {
    const { data } = await supabase.auth.getSession();
    if (data.session?.user) await setAuth(data.session);
  };

  return { user, profile, setAuth, getSession, trackAuthChanges };
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useAuthStore, import.meta.hot));
}

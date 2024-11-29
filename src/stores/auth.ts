import type { User, Session } from '@supabase/supabase-js';
import type { Tables } from '@root/database/types/database.types';
import { profileQuery } from '@/utils/authQueries';

export const useAuthStore = defineStore('auth-store', () => {
  const user = ref<null | User>(null);
  const profile = ref<null | Tables<'profiles'>>(null);

  const setAuth = async (userSession: null | Session = null) => {
    if (!userSession) {
      user.value = null;
      return;
    }

    user.value = userSession.user;
    await setProfile();
  };

  const setProfile = async () => {
    if (!user.value) {
      profile.value = null;
      return;
    }

    if (!profile.value || profile.value.id !== user.value.id) {
      const { data, error } = await profileQuery(user.value.id);
      profile.value = data || null;
    }
  };

  return { user, profile, setAuth };
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useAuthStore, import.meta.hot));
}

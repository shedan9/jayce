import { create } from 'zustand';
import storage from '@/utils/storage';

export const useAppStore = create((set) => ({
  theme: storage.local.theme.get() || 'light',
  userInfo: null,
  changeTheme: (v) => {
    set({ theme: v });
    storage.local.theme.set(v);
  },
  setUserInfo: (v) => set({ userInfo: v }),
}));

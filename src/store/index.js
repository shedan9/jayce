import { create } from 'zustand';
import storage from '@/utils/storage';

export const useAppStore = create((set) => ({
  theme: storage.local.theme.get() || 'light',
  primaryColor: storage.local.primaryColor.get() || '#4096ff',
  userInfo: null,
  changeTheme: (v) => {
    set({ theme: v });
    storage.local.theme.set(v);
  },
  setPrimaryColor: (v) => {
    set({ primaryColor: v });
    storage.local.primaryColor.set(v);
  },
  setUserInfo: (v) => set({ userInfo: v }),
}));

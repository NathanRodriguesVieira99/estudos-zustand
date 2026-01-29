import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware"; // usado para persistir estados (LocalStorage, AsyncStorage etc)

interface User {
  name: string;
  email: string;
  avatar?: string;
}

interface PersistStore {
  user: User | null; // usuário pode existir ou não
  login: (user: User) => void;
  logout: () => void;
}

export const usePersistStore = create<PersistStore>()(
  persist(
    (set) => ({
      user: null,

      login: (user: User) => {
        if (!user.email) return;
        set({ user });
      },

      logout: () => set({}),
    }),
    {
      name: "user-localStorage", // chave usada para salvar dados no storage
      storage: createJSONStorage(() => localStorage), // serializa automaticamente os dados do storage para JSON
    },
  ),
);

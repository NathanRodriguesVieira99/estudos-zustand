import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware"; // usado para persistir estados (LocalStorage, AsyncStorage etc)

interface User {
  name: string;
  email: string;
  avatar?: string;
}

interface PersistStoreStates {
  user: User | null; // usuário pode existir ou não
}

interface PersistStoreActions {
  login: (user: User) => void;
  logout: () => void;
}

type PersistStore = PersistStoreStates & PersistStoreActions;

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

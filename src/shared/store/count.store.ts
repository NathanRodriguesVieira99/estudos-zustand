import { create } from "zustand";

// Tipagem para a store com estados iniciais
interface CountStoreStates {
  count: number;
}

// Tipagem para a store com métodos
interface CountStoreActions {
  increment: () => void;
  decrement: () => void;
  reset: () => void;
}

// União dos tipos da store
type CountStore = CountStoreStates & CountStoreActions;

// set -> é a função que atualiza o estado da store
export const useCountStore = create<CountStore>()((set) => ({
  count: 0, // estado inicial

  // declaração das funções
  increment: () => set((prev) => ({ count: prev.count + 1 })),

  decrement: () => {
    set((prev) => ({ count: prev.count <= 0 ? 0 : prev.count - 1 }));
  },

  reset: () => set({ count: 0 }),
}));

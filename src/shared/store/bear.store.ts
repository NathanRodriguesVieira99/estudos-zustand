import { create } from "zustand";

// estados da Store
interface BearStoreStates {
  bears: number;
  food: string;
}

// métodos da Store
interface BearStoreActions {
  feed: (food: string) => void;
}

// Tipagem com união entre estados e métodos da Store
type BearStore = BearStoreStates & BearStoreActions;

export const useBearStore = create<BearStore>()((set) => ({
  bears: 2, // estado inicial
  food: "honey", // estado inicial

  // set atualiza o valor da variável 'food'
  feed: (food: string) => set(() => ({ food })),
}));

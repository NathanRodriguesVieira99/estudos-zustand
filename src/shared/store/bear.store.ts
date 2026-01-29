import { create } from "zustand";

// estados e métodos da Store
interface BearStore {
  bears: number;
  food: string;
  feed: (food: string) => void;
}

export const useBearStore = create<BearStore>()((set) => ({
  bears: 2, // estado inicial
  food: "honey", // estado inicial

  // set atualiza o valor da variável 'food'
  feed: (food: string) => set(() => ({ food })),
}));

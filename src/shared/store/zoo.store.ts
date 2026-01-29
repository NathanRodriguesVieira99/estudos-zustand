import { create } from "zustand";

// armazena os estados iniciais
const initialStates = {
  bears: 0,
  food: "honey",
};

// tipagem com estados iniciais + métodos
type ZooStore = typeof initialStates & {
  increase: (by: number) => void;
  reset: () => void;
};

export const useZooStore = create<ZooStore>()((set) => ({
  ...initialStates, // -> recebe todos os estados iniciais

  increase: (by: number) => set((prev) => ({ bears: prev.bears + by })),
  reset: () => set(initialStates), // -> retorna para os estados iniciais
}));

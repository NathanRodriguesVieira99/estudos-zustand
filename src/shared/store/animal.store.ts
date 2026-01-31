import { create } from "zustand";

interface State {
  cats: number;
  dogs: number;
}

interface Action {
  incrementDogs: () => void;
  incrementCats: () => void;
  totalAnimais: () => number;
  reset: () => void;
}

type AnimalStore = State & Action;

// garante a tipagem dos estados iniciais
const initialStates: State = {
  cats: 0,
  dogs: 0,
};

// get() -> retorna o estado atual (usado para ler estado atual da store sem alterar)
// set -> altera o estado
export const useAnimalStore = create<AnimalStore>()((set, get) => ({
  ...initialStates,

  incrementCats: () => set((state) => ({ cats: state.cats + 1 })),
  incrementDogs: () => set((state) => ({ dogs: state.dogs + 1 })),
  totalAnimais: () => get().cats + get().dogs,
  reset: () => set(() => initialStates),
}));

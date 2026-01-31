import { create, type StateCreator } from "zustand";

interface FishSlice {
  fishes: number;
  addFish: () => void;
}

interface BearSlice {
  bears: number;
  addBear: () => void;
  eatFish: () => void;
}

interface SharedSlice {
  addBoth: () => void;
  getBoth: () => void;
}

// cria uma slice com acesso a outras slices via set,get
// StateCreator<tipagem das slices que serão acessadas,[],[], tipo da slice>
export const createBearSlice: StateCreator<
  BearSlice & FishSlice,
  [],
  [],
  BearSlice
> = (set) => ({
  bears: 0,

  addBear: () => set((state) => ({ bears: state.bears + 1 })),
  eatFish: () => set((state) => ({ fishes: state.fishes - 1 })),
});

export const createFishSlice: StateCreator<
  FishSlice & BearSlice,
  [],
  [],
  FishSlice
> = (set) => ({
  fishes: 0,
  addFish: () => set((state) => ({ fishes: state.fishes + 1 })),
});

// Slice que compartilha estados e métodos para todas as Slices
export const createSharedSlice: StateCreator<
  FishSlice & BearSlice,
  [],
  [],
  SharedSlice
> = (set, get) => ({
  addBoth: () => {
    // altera o estado de ambas (os recebe via get())
    get().addBear();
    get().addFish();
  },

  // recebe os estados atuais via get() e os soma
  getBoth: () => get().bears + get().fishes,
});

// unindo as Slices em uma Store e repassando parametros via ...a
export const useStoreBound = create<BearSlice & FishSlice & SharedSlice>()(
  (...a) => ({
    ...createBearSlice(...a),
    ...createFishSlice(...a),
    ...createSharedSlice(...a),
  }),
);

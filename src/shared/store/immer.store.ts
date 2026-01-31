import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

interface State {
  mae: number;
  pai: {
    dogs: {
      dog: {
        children: number;
      };
    };
  };
}

interface Action {
  addChildrenDog: () => void;
}

type ImmerStore = State & Action;

/**
 * Gerenciando estados aninhados (nested) com Immer
 */

export const useImmerStore = create<ImmerStore, [["zustand/immer", never]]>(
  immer((set) => ({
    mae: 0,
    pai: {
      dogs: {
        dog: {
          children: 0,
        },
      },
    },

    // forma padrão de gerenciar estados aninhados
    // addChildrenDog: () =>
    //   set((state) => ({
    //     pai: {
    //       ...state.pai,
    //       dogs: {
    //         ...state.pai.dogs,
    //         dog: {
    //           children: state.pai.dogs.dog.children + 1,
    //         },
    //       },
    //     },
    //   })),

    // Gerenciamento de estados aninhados com Immer
    addChildrenDog: () =>
      set((state) => {
        ++state.pai.dogs.dog.children; // ++ == state.pai.dogs.dog.children + 1
      }),
  })),
);

let x = 1;

x = 1; // não muda a variável, só calcula o valor (x === 1)
x += 1; // soma o valor e o reatribui a variável (x === 2)
x++; // incrementa com 1 e altera a variável (retorna 2, depois 3 , etc)
++x; // incrementa e depois retorna o novo valor (x incrementa para 4 e retorna 4)

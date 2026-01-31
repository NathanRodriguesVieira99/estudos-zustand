import "./index.css";
import { Button } from "./presentation/components/ui/button";
// import { useAnimalStore } from "./shared/store/animal.store";
import { useStoreBound } from "./shared/store/slices.store";
// import { useBoundStore } from "./shared/store/slice.store";
// import { useZooStore } from "./shared/store/zoo.store";
// import { useBearStore } from "./shared/store/bear.store";
// import { useCountStore } from "./shared/store/count.store";
// import { useImmerStore } from "./shared/store/immer.store";

export const App = () => {
  // const { count, increment, decrement, reset } = useCountStore();
  // const { bears, feed } = useBearStore();
  // const { bears, increase, reset } = useZooStore();
  // const { login, logout, token, updateProfile, user } = useBoundStore();

  /**
   * Prática recomendada para se usar as Stores a fim de evitar re-renders desnecessários
   */
  // const count = useCountStore((state) => state.count);
  // const increment = useCountStore((state) => state.increment);
  // const decrement = useCountStore((state) => state.decrement);
  // const reset = useCountStore((state) => state.reset);

  // const handleCount = () => increment();
  // const handleDecrement = () => decrement();
  // const handleReset = () => reset();

  // const dogChildren = useImmerStore((state) => state.pai.dogs.dog.children);
  // const addDogChildren = useImmerStore((state) => state.addChildrenDog);

  // const handleAddDogChildren = () => addDogChildren();

  // const cats = useAnimalStore((state) => state.cats);
  // const dogs = useAnimalStore((state) => state.dogs);
  // const incrementCats = useAnimalStore((state) => state.incrementCats);
  // const incrementDogs = useAnimalStore((state) => state.incrementDogs);
  // const totalAnimais = useAnimalStore((state) => state.totalAnimais);
  // const reset = useAnimalStore((state) => state.reset);

  const bears = useStoreBound((state) => state.bears);
  const fishes = useStoreBound((state) => state.fishes);
  const addBoth = useStoreBound((state) => state.addBoth);
  const addBear = useStoreBound((state) => state.addBear);
  const addFish = useStoreBound((state) => state.addFish);

  return (
    <div className=" flex items-center flex-col justify-center h-screen w-full ">
      <div className="m-6">
        <h1>Animais</h1>
        <p>ursos: {bears} </p>
        <p>peixes: {fishes}</p>
      </div>
      <div className="flex flex-row justify-center items-center gap-10">
        <Button variant={"default"} onClick={addBoth}>
          Adicionar todos
        </Button>
        <Button variant={"default"} onClick={addBear}>
          Adicionar urso
        </Button>
        <Button variant={"default"} onClick={addFish}>
          Adicionar peixe
        </Button>
      </div>
    </div>
  );
};

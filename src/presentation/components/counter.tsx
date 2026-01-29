import { useCountStore } from "../../shared/store/count.store";

export const Counter = () => {
  const { count, increment, decrement, reset } = useCountStore();
  return (
    <div>
      <h2>{count}</h2>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>reset</button>
    </div>
  );
};

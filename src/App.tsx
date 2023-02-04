import { useState, useEffect, useCallback, MouseEvent, KeyboardEvent, useMemo } from 'react';
import './App.css';


interface User {
  id: number,
  username: string,
}


function App() {
  const [count, setCount] = useState<number>(5)
  const [users, setUsers] = useState<User[] | null>(null)

  useEffect(() => {
    console.log("mounting")

    return () => console.log("unmounting")
  }, [users])

  type fibFunc = (n: number) => number

  const fib: fibFunc = (n) => {
    if (n < 2) return n
    return fib(n - 1) + fib(n - 2)
  }

  const myNum: number = 37

   //useMemo memoizes a value
  const result = useMemo<number>(() => fib(myNum), [myNum])

  //useCallback memoizes a function so it's not recreated.
  const addTwo = useCallback((e: MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>): void => setCount(prev => prev + 1), [])

  return (
    <div className="App">
      <h1> {count} </h1>
      <button onClick={addTwo}> Add </button>
    </div>
  );
}

export default App;

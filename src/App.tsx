import { useState, useEffect, useCallback } from 'react';
import './App.css';

//useCallback Memoizes a function so it's not always recreated


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

 const addTwo = useCallback(() => setCount(prev => prev +1 ), [])

  return (
    <div className="App">
      <h1> {count} </h1>
      <button onClick={() => setCount(prev => prev + 1)}> Add </button>
    </div>
  );
}

export default App;

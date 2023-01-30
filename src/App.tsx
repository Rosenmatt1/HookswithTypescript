import { useState, useEffect, useCallback } from 'react';
import './App.css';


interface User {
  id: number,
  username: string,
}


function App() {
  const [count, setCount] = useState<number | null>(5)
  const [users, setUsers] = useState<User[] | null>(null)

  useEffect(() => {
    console.log("mounting")

    return () => console.log("unmounting")

  }, [users])

  return (
    <div className="App">
      <h1> {count} </h1>
      {/* <button onClick={() => setCount(prev => prev + 1)}> Add </button> */}
    </div>
  );
}

export default App;

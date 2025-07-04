import { useState } from 'react'

import './App.css'

function App() {
  const [count,setcount] = useState(12);
  const increment = ()=>{
    if(count>=20){
      setcount(20);
    }else{
    setcount(count+1);
  }
}

  const decrement = ()=>{

    if(count<=0){
      setcount(0);
    }else{
      setcount(count-1);
    }
   
  }
  
  return (
    <>
    <p>{count}</p>
    <button onClick={increment}>increment</button>
    <button onClick={decrement}>decrement</button>
    </>
  )
}

export default App

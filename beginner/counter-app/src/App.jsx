import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const incrementCounter = () =>{
    setCount(count+1)
  }

  const decrementCounter = () =>{
   (count > 0) ? setCount(count-1) : setCount(count)
  }

  const resetCounter = () => {
    setCount(0);
  }

  return (
   <>
      <div className='counter-container'>
        <p className='counter-panel'>{count}</p>
        <button className='counter-button' onClick={incrementCounter} >+</button>
        <button className={`counter-button ${count ===0 ? 'disabled': ''}`} onClick={decrementCounter} disabled={count === 0}>-</button>
        <button className={`counter-button ${count ===0 ? 'disabled': ''}`} onClick={resetCounter} disabled={count === 0} >Reset</button>
      </div>
   </>
  )
}

export default App

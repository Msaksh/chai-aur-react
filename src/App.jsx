import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const addValues = () => {
    setCount(count + 1)
  }
  const removeValues = () => {
    if(count > 0){

      setCount(count - 1)
    }
  }

  return (
    <>
      <h1>Count is : {count}</h1>
      <div className="card">
        <button onClick={addValues}>
          add count
        </button>
        <br />
        <button onClick={removeValues}>
          remove count
        </button>
       
      </div>
      
    </>
  )
}

export default App

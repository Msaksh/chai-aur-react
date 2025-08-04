import React from 'react'
import { useState } from 'react'
function Home() {

  const [count, setCount] = useState(0)

  const addValues = () => {
    setCount(count + 1)
  }
  const removeValues = () => {
    if (count > 0) {

      setCount(count - 1)
    }
  }


  return (
    <div>
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
    </div>
  )
}

export default Home
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
    <div className='flex flex-col items-center justify-center h-screen w-full bg-gray-400'>
      <h1>Count is : {count}</h1>
      <div className="card">
        <button onClick={addValues}
          className='rounded bg-green-400 text-white p-2 hover:bg-red-500 transition-all duration-300'>
          add count
        </button>
        <br />
        <button className='rounded-full bg-green-500 text-white p-2 hover:bg-red-500 transition-all duration-300' onClick={removeValues}>
          remove count
        </button>
        <a href="/chai-aur-react/#/bgchanger" className='mt-4'>

          <button className='cursor-pointer rounded bg-blue-500 text-white p-2 hover:bg-blue-600 transition-all duration-300'>
            BgChanger
          </button>
        </a>

      </div>
    </div>
  )
}

export default Home
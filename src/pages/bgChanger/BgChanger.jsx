import React, { useState } from 'react'

function BgChanger() {

  const [bgColor, setBgColor] = useState('white')
  return (
    <div className=' h-screen flex justify-center'
      style={{ backgroundColor: bgColor }}>
      <div className="fixed bottom-4 justify-center bg-white p-4 rounded shadow-lg flex gap-2">
        <button
          onClick={() => setBgColor('red')}
          className='rounded bg-red-400 tyext-white p-2 hover:bg-red-500 transition-all duration-300'>
          Red
        </button>
        <button
          onClick={() => setBgColor('purple')}
          className='rounded bg-purple-400 tyext-white p-2 hover:bg-purple-500 transition-all duration-300'>
          purple
        </button>
        <button
          onClick={() => setBgColor('yellow')}
          className='rounded bg-yellow-400 tyext-white p-2 hover:bg-yellow-500 transition-all duration-300'>
          yellow
        </button>
        <button
          onClick={() => setBgColor('orange')}
          className='rounded bg-orange-400 tyext-white p-2 hover:bg-orange-500 transition-all duration-300'>
          orange
        </button>
        <button
          onClick={() => setBgColor('blue')}
          className='rounded bg-blue-400 tyext-white p-2 hover:bg-blue-500 transition-all duration-300'>
          blue
        </button>
        <button
          onClick={() => setBgColor('green')}
          className='rounded bg-green-400 text-white p-2 hover:bg-green-500 transition-all duration-300'>
          Green
        </button>
      </div>
    </div>
  )
}

export default BgChanger
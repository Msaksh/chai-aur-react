
import './App.css'
import { Routes, Route, Link } from 'react-router-dom';
import BgChanger from './pages/bgChanger/BgChanger';
import Home from './pages/Home/Home';

function App() {


  return (
    <>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bgchanger" element={<BgChanger />} />
        {/* Add more routes as needed */}
      </Routes>

    </>
  )
}

export default App

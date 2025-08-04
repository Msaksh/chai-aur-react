
import './App.css'
import { Routes, Route, Link } from 'react-router-dom';
import BgChanger from './pages/bgChanger/bgChanger';
import Home from './pages/Home/Home';

function App() {


  return (
    <>

      <Routes>
        <Route path="/chai-aur-react" element={<Home />} />
        <Route path="/chai-aur-react/bgchanger" element={<BgChanger />} />
        {/* Add more routes as needed */}
      </Routes>

    </>
  )
}

export default App

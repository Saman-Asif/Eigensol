
import { Routes, Route, } from "react-router-dom";
import GridBackground from './components/GridBackground';
import GlobalCursor from "./components/GlobalCursor";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
const App = () => {
  return (
    <div className='relative min-h-screen w-full overflow-hidden'>
     <main>
        <Home/>
     </main>
    </div>
  )
}

export default App

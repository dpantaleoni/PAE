import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import PressureBomb from './pages/PressureBomb';
import SprayData from './pages/SprayData';

function App() {
  return (
    <>

    <Router>
      <Sidebar />
      <Routes>
        <Route path='/' Component={Home}/>
        <Route path='/pressurebomb' Component={PressureBomb}/>
        <Route path='/spraydata' Component={SprayData}/>
      </Routes>
    </Router>
      
    </>
  );
}

export default App;

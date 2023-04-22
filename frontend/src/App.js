import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <>

    <Router>
      <Sidebar />
      <Routes>
        <Route path='/' />
      </Routes>
    </Router>
      
    </>
  );
}

export default App;

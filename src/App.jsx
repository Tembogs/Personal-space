import { BrowserRouter as Router, Routes, Route } from 'react-router';
import './App.css'
import Navbar from './cmpt/Nav';
import Footly from './cmpt/Footer';
import Menu from './pages/Menu';
import Abt from './pages/Discover'
import Getty from './pages/Get';

function App() {
  

  return (
    <Router>
      <Navbar/> 
     <Routes>
      <Route path= '/' element={<Abt/>}/>
      <Route path='/menu' element={<Menu/>}/>
      <Route path = '/started' element={<Getty/>}/>
     </Routes>
      <Footly/>
    </Router>
  )
}

export default App

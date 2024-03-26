
import Navbar from './components/Navbar/Navbar'; 
import Home from './pages/Home';
import Slider from './components/Slider';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Link
} from "react-router-dom";
import Contactus from './pages/Contact Us/Contactus';
import Events from './components/Events/Events';
import Apply from './pages/Apply';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home/>}></Route>
        <Route path='/contact' element={<Contactus/>}></Route> 
        <Route path='apply' element={<Apply/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;

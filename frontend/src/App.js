import './index.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Pages/Home'
import Dress from './Pages/Dress'
import Men from './Pages/men' 
import Contact from './Pages/Contact';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/dress' element={<Dress />} />
          <Route path='/men' element={<Men />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

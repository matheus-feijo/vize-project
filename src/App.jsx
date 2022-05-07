import "./globalStyle.css";

import {BrowserRouter, Route,Routes} from "react-router-dom";
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Register } from './pages/Register';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/home/:id' element={<Home />} />
        <Route path='/cadastro' element={<Register />}></Route>
      </Routes>
        
      
      </BrowserRouter>
    </div>
  )
}

export default App

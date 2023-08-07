import Signup from './Signup'
 import Login from './Login'
import 'bootstrap/dist/css/bootstrap.css'
// import { useState } from 'react';
 import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Dashboard from './Dashboard';
import Home from './Home';

function App() {
  return (
    
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Home/>}/>
      <Route path='/register' element={<Signup/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
    </Routes>
    </BrowserRouter>
    
    
  );
}

export default App;

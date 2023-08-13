
import './App.css';

import Signup from './component/Signup';
import Login from './component/Login';
import { Routes, Route } from "react-router-dom"
import Home from './component/Home';
import Homedata from './component/Homedata';
import List from './component/List';
import User1 from './component/User1';


//Routes,Route
function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path="/" element={ <Login/> } />
        <Route path="/signup" element={ <Signup/> } />
        <Route path="/home" element={<Home/>}/>
        <Route path="/list" element={<List/>}/>
        <Route path="/homedata" element={<Homedata/>}/>
        <Route path="/userdetails/:id" element={<User1/>}/>
      
      </Routes>
    </div>
  );
}

export default App;

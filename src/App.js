
import './App.css';
import Signup from './component/Signup';
import Login from './component/Login';
import { Routes, Route } from "react-router-dom"
import Home from './component/Home';
import Homedata from './component/Homedata';
//Routes,Route
function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path="/" element={ <Login/> } />
        <Route path="/signup" element={ <Signup/> } />
        <Route path="/home" element={<Home/>}/>
        <Route path="/homedata" element={<Homedata/>}/>
      </Routes>
    </div>
  );
}

export default App;

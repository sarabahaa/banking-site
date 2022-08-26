import logo from './logo.svg';
import Header from './Header.js';
import Home from './pages/Home.js';
import Login from './pages/Login.js';
import Register from './pages/Register.js';
import Profile from './pages/Profile.js';
import back from './assets/back.jpeg';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'


function App() {
  return (
    <Router>
    <div   style={{backgroundImage: `url(${back})` ,backgroundRepeat:'no-repeat', backgroundSize:'cover', minHeight:"100vh"  /*  height:'100%' */}}  >
      <Header/>
      <Routes>
        
        <Route exact path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/profile" element={<Profile/>}/>
    
      </Routes>
    </div>
    </Router>
  );
}

export default App;

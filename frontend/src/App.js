import React from 'react';
import {BrowserRouter as Router ,Routes ,Route} from "react-router-dom"




import Header from './components/Header';
import { Home } from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import "./App.css"
import {ToastContainer} from "react-toastify"
// import Dashboard from './components/Dashboard';

function App() {
  return (
    <Router>
    <div className="App">
     <Header/>
   <Routes>
    {/* <Route path="/" element={<Dashboard/>}/> */}
    <Route path="/" element={<Home/>}/>
    <Route path='/Register' element={<Register/>}/>
    <Route path='/Login' element={ <Login/>}/>
   
    </Routes>
    </div>
    <ToastContainer/>
    </Router>
  );
}

export default App;

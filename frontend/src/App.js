import React from 'react';
import {BrowserRouter as Router ,Routes ,Route} from "react-router-dom"
import BlogForm from './components/BlogForm';



import Header from './components/Header';
import { Home } from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import "./App.css"
import {ToastContainer} from "react-toastify"

function App() {
  return (
    <Router>
    <div className="App">
     <Header/>
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path='/Register' element={<Register/>}/>
    <Route path='/Login' element={ <Login/>}/>
    <Route path='/BlogForm' element={  <BlogForm/>}/>
    </Routes>
    </div>
    <ToastContainer/>
    </Router>
  );
}

export default App;

import React from 'react';
import {BrowserRouter as Router ,Routes ,Route} from "react-router-dom"
import BlogForm from './components/BlogForm/BlogForm';



import Header from './components/Header/Header';
import { Home } from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import "./App.css"

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
    </Router>
  );
}

export default App;

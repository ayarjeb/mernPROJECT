import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Register from './view/Register'
import Cvprocess from './view/Cvprocess';
import  Login from './view/Login'
import Dashboard from './view/Dashboard';

function App() {

  return (
    <>
        <Router>
        <Routes>
        <Route path='/' element ={<Home/>}></Route>
        {/* <Route  path='/'element={< NavBar/>}></Route> */}
        <Route path='/register' element ={<Register/>}></Route>
        <Route path='/process' element ={<Cvprocess/>}></Route>
        <Route path='/login' element ={<Login/>}></Route>
        <Route path='/dash' element ={<Dashboard/>}></Route>




        </Routes>
      </Router>
      
    </>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';

function App() {

  return (
    <>
        <Router>
        <Routes>
        <Route path='/' element ={<Home/>}></Route>
        {/* <Route  path='/'element={< NavBar/>}></Route> */}
        </Routes>
      </Router>
    </>
  )
}

export default App

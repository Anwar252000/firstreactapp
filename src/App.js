import './App.css';
import Navbar from './components/Navbar';
import React, { useState } from 'react';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  const [mode, setMode] = useState('light') // whether dark mode is enabled or not

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = 'rgba(0,0,0,0.9)'
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
    }
  }
  return (
    <>
      <BrowserRouter>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Routes>
        <Route exact path='/' element={<Home heading="Enter the text to Analyze" mode={mode}/>}/>
        <Route exact path='/about' element={<About mode={mode}/>}/>
        <Route exact path='/contact' element={<Contact mode={mode}/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

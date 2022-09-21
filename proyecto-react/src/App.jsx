import React from 'react';
import Navbar from './components/Navbar';
import Contador from './components/Contador';
import Inicio from './components/Inicio';
import Footer from './components/Footer';
import './App.css'


const App = () => {
    return (
      <div className='container'>
        <Navbar/>
        <Inicio/>
        <Footer/>
      </div>
    );
}

export default App;

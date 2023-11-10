import './App.css';
import { useState } from 'react';
import BackToTopButton from './components/BackToTopButton';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Newsletter from './components/Newsletter';
import TopBar from './components/TopBar';
 import About from './components/About';
import Designs from './components/Designs';
import Text from './components/Text';
import Background from './components/Background';



function App() {
  return (
    <div className='bg-amber-900 bg-opacity-10'>
      <TopBar/>
      <Navbar/>
      <Home/>
      <Background/>
      <Text/>
      <About/>
      <Designs/>
      <BackToTopButton/>
      <Gallery/>
      <Newsletter/>  
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;



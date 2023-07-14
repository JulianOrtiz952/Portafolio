import React from 'react';
// components
import Banner from './components/Banner';
import Header from './components/Header';
import Nav from './components/Nav';
import About from './components/About';
import Work from './components/Work';
import Contact from './components/Contact';

const App = () => {
  return (
    <div className=' bg-black/90 bg-cover overflow-hidden min-h-screen'>
      <Header />
      <Banner />
      <Nav />
      <About />
      <Work />
      <Contact />
    
    </div>
  );
};

export default App;

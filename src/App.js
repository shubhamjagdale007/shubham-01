import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar'; 
import Home from './components/Home';
import OurStory from './components/pages/OurStory';
import About from './components/About';





function App() {
  return (
    <Router>
      {/* <Route path='ourstory' element={<OurStory/>}/> */}
      <Navbar />
      <Home />
      <OurStory />
      <About />
    
    </Router>
  );
}

export default App;

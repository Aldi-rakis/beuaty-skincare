import React from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';
import AppRoutes from './Route/route';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
  <>
  
  <Navbar />
        <ScrollToTop />

    <AppRoutes />
      <Footer /> </>
      
    
  );
}

export default App;

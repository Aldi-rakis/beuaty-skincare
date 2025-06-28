import React from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';
import AppRoutes from './Route/route';

function App() {
  return (
  <>
  
  <Navbar />
    <AppRoutes />
      <Footer /> </>
      
    
  );
}

export default App;

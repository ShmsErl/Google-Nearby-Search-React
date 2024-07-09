import React from 'react';
import './App.css';
import { Route, BrowserRouter as Router , Routes } from 'react-router-dom';
import Sidebar from './components/sidebar/Sidebar';
import Home from './components/home/Home';
import OverlayLoader from './components/OverlayLoader/OverlayLoader';
import 'react-toastify/dist/ReactToastify.css'; 
import Footer from './components/footer/Footer';

function App() {
  return (
    <Router >
    <div className="App">   
     <Sidebar/>    
      <Routes>
      <Route path="/" element={<Home />} />
      </Routes>
      <Footer/>
     
    </div>
    <OverlayLoader />
  
  </Router>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import Cards from './components/Cards';
import Home from './components/Pages/Home'
import Services from './components/Pages/Services';
import Products from './components/Pages/Products';
import SignUp from './components/Pages/SignUp';
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Home/>
        <Routes>
          <Route path='/services' element={<Services />} />
          <Route path='/products' element={<Products />} />
          <Route path='/sign-up' element={<SignUp />} />
        </Routes>
      </Router>

    </>
  );
}

export default App;
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import BoutiqueFormSteps from './components/NewBoutique/BoutiqueFormSteps';
import HomePage from './components/HomePage/HomePage';
import Error404 from './components/Error/Error404';


function App() {
  return (
    <div>
      <Header />
      <Router>
        <Routes>
            <Route exact path='/' element={<HomePage />} />
            <Route path='/create-shop' element={<BoutiqueFormSteps />} />
            <Route path="*" element={<Error404/>} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
};

export default App;
  
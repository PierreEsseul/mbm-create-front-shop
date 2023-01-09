import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ShopFormSteps from './components/NewShop/ShopFormSteps';
import HomePage from './components/HomePage/HomePage';
import Error404 from './components/Error/Error404';
import Cgu from './components/LegalMention/Cgu';
import LegalMention from './components/LegalMention/LegalMention';


function App() {
  return (
    <div>
      <Header />
      <Router>
        <Routes>
            <Route exact path='/' element={<HomePage />} />
            <Route path='/create-shop' element={<ShopFormSteps />} />
            <Route path='/cgu' element={<Cgu />} />
            <Route path='/legal-mention' element={<LegalMention />} />
            <Route path="*" element={<Error404/>} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
};

export default App;
  
import React from 'react';
import Header from './Elements/Header';
import How from './Elements/How';
import Offer from './Elements/Offer';
import Ordered from './Elements/Ordered';
import GetStart from './Elements/GetStart';
import Contact from './Elements/Contact';

const HomePage = () => {
    return (
        //TODO header avec logo nav bar
        <div>
            <Header />
            <How />
            <Offer/>
            <Ordered />
            <GetStart />
            <Contact />
        </div> 
        //TODO footer avec logo RS et mention legal  
    );

}

export default HomePage;
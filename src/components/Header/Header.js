import React from 'react';
import BurgerMenu from '../NavBar/BurgerMenu';

import './Header.css';

const Header = () => {
    return (
        <div className='header'>
            <div>
                <a href="/"><img src="./img/logo_MBM_mini.png" alt="logo MadeByMe" /></a>
            </div>
            <div>
                <BurgerMenu />
            </div>
        </div>
    )
};

export default Header;
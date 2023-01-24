import React from 'react';
import BurgerMenu from '../BurgerMenu/BurgerMenu';

import './Header.css';

const Header = () => {
    return (
        <div className='header'>
            <div className='header__logo'>
                <a href="/"><img src="./img/svg/logo_TitleMDM.svg" alt="logo MadeByMe" /></a>
            </div>
            <div>
                <BurgerMenu />
            </div>
        </div>
    )
};

export default Header;
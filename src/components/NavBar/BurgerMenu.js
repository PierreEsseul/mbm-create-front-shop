import React from 'react';
import { slide as Menu } from 'react-burger-menu';

import './BurgerMenu.css';

function BurgerMenu() {

  return (
    <div className='burgerMenu'>
        {/* <a href="#">
            <img src="/img/burger_icon.png" alt="icon affichage menu" />
        </a> */}
        <div className='burgerMenu__items'>
            <Menu 
                right
                // customBurgerIcon={ <img src="/img/burger_icon.png" /> }
                >
                    <a className="menu-item" href="/">Accueil</a>

                    <a className="menu-item" href="/create-shop">Créer votre boutique</a>

                    <a className="menu-item" href="#contact">Contact</a>
            </Menu>
        </div>
        
    </div>
  );
}

export default BurgerMenu;

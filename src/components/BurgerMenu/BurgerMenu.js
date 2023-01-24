import React from 'react';
import { slide as Menu } from 'react-burger-menu';

import './BurgerMenu.css';

function BurgerMenu() {

  return (
    <div className='burgerMenu'>
        <div className='burgerMenu__items'>
            <Menu right>
                    <a className="menu-item" href="/">Accueil</a>

                    <a className="menu-item" href="/create-shop">Créer votre boutique</a>

                    <a className="menu-item" href="#contact">Contact</a>
            </Menu>
        </div>
        
    </div>
  );
}

export default BurgerMenu;

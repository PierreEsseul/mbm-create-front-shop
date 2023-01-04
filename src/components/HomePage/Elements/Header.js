import React from 'react';

const Header = () => {
    return (
        <div className='home-page__header'>
            <div className='home-page__header-image'>
                <img src="https://via.placeholder.com/300" alt="image construction d'un site"/>
            </div>
            <h1>Créez votre boutique en 5 min</h1>
            <div>
                <p>MadeByMe, ouvrir ma boutique en ligne<br />
                 gratuitement n'a jamais été aussi simple</p>
                <div className='create-shop'>
                    <a href="/create-shop" target="_blank" className='create-shop__btn'>Créez votre boutique !</a>
                </div>
                 <div className='home-page__header-asset'>
                    <img src="https://via.placeholder.com/25" alt="image rapide et sécurisé" />
                    <p>Rapide & Sécurisé</p>
                 </div>
                 <div className='home-page__header-asset'>
                    <img src="https://via.placeholder.com/25" alt="image gratuit" />
                    <p>Gratuit</p>
                 </div>
                 <div className='home-page__header-asset'>
                    <img src="https://via.placeholder.com/25" alt="image modalité des paiements" />
                    <p>Paiements CB pour vos clients</p>
                 </div>
            </div>
        </div>
    );
}

export default Header;
import React from 'react';

import './Elements.css'

const Welcome = () => {
    return (
        <div className='home-page__welcome'>
            <div className='home-page__img-titre'>
                <div className='home-page__welcome-image'>
                    <img src="/img/svg/constructLego.svg" alt="image construction d'un site"/>
                </div>
                <h1>Créez votre boutique en 5 min</h1>
            </div>
            <div>
                <p>MadeByMe, ouvrir ma boutique en ligne<br />
                 gratuitement n'a jamais été aussi simple</p>
                <div className='create-shop'>
                    <a href="/create-shop" target="_blank" className='create-shop__btn'>Créez votre boutique !</a>
                </div>
                 <div className='home-page__welcome-asset'>
                    <img src="/img/icon/security.png" alt="image rapide et sécurisé" />
                    <p>Rapide & Sécurisé</p>
                 </div>
                 <div className='home-page__welcome-asset'>
                    <img src="/img/icon/free.png" alt="image gratuit" />
                    <p>Gratuit</p>
                 </div>
                 <div className='home-page__welcome-asset'>
                    <img src="/img/icon/paiement.png" alt="image modalité des paiements" />
                    <p>Paiements CB pour vos clients</p>
                 </div>
            </div>
        </div>
    );
}

export default Welcome;
import React, { useState } from 'react';
import axios from 'axios';

const GetStart = () => {

    return (
        <div className='home-page__getStart'>
            <div>
                <h2>Prêt à lancer votre boutique ?</h2>

                <div className='create-shop'>
                    <a href="/create-shop" target="_blank" className='create-shop__btn'>Créez votre boutique !</a>
                </div>
            </div>
            <div className='home-page__getStart-image'>
                <img src="/img/svg/constructPaint.svg" alt="image de personne créant un site internet" />
            </div>
        </div>
    );
};

export default GetStart;
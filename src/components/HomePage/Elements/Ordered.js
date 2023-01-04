import React from 'react';

import './Elements.css';

const Ordered = () => {
    return (
        <div className='home-page__ordered'>
            <div className='home-page__ordered-image'>
                <img src="https://via.placeholder.com/300" alt="commande en ligne de produit" />
            </div>
            <div>
                <h2>Ne perdez aucune commande</h2>
                <p>Plus de commandes perdues dans votre messagerie... 
                    Avec MadeByMe, chacun de vos clients sera autonome pour commander. 
                    Tous les moyens de paiements sont acceptés sur votre site.</p>
            </div>
        </div>
    );
};

export default Ordered;
import React from 'react';

import './Error404.css'

const Error404 = () => {
    const handleClick = () => {
        window.location.replace('/');
      };

    return (
        <div className='error'>
            <div className='error__404'>404</div>
            <div className='error__message'>
                <div>Désolé, page introuvable</div>
                <div>La page que avez demandée est introuvable</div>
                <button onClick={handleClick}>Retour à la page d'accueil</button>
            </div>
        </div>
    )
};

export default Error404;
import React from 'react';


import './Steps.css';

const ConfirmStep = (props) => {

    return (
        <div className='new-boutique__controls'>
            <div className='new-boutique__image'>
                <img src="/img/confirmImg.png" alt="image madebyme de confirmation" />
            </div>

            <div className='new-boutique__control'>
                <p className='new-boutique__confirm'>Votre boutique est prête ;)</p>

                <p className='new-boutique__confirm'>On vient de vous envoyer un mail à : 
                    <span className='vendeurMail'>utilsateurAMettre@dynamique.com</span>.<br/>
                    On vous explique comment ça fonctionne !</p>
            </div>

            <div className='new-boutique__actions'>
                <a className='redirection' href="#" title="Retour sur la page d'accueil">Retour à l'accueil</a>
            </div>
        </div>
    )
};

export default ConfirmStep;
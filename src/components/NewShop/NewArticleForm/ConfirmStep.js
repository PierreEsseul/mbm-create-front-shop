import React from 'react';
import BtnLoad from '../../BtnLoad/BtnLoad';

import './Steps.css';

const ConfirmStep = (props) => {
    
    return (
        <div className='new-boutique__controls'>
            <div className='new-boutique__image'>
                <img src="/img/svg/constructPaint.svg" alt="image madebyme de confirmation" />
            </div>

            <div className='new-boutique__control-text'>
                <p className='new-boutique__confirm'>Votre boutique est prête ;)</p>

                <p className='new-boutique__confirm'>On vient de vous envoyer un mail à<br />
                    <span className='sellerMail'>{props.onUserMail}</span><br/>
                    On vous explique comment ça fonctionne !</p>
            </div>

            <div className='new-boutique__actions'>
                <BtnLoad />
            </div>
            <div></div>
        </div>
    )
};

export default ConfirmStep;
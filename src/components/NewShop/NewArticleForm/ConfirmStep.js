import React from 'react';
import BtnLoad from '../../BtnLoad/BtnLoad';

import './Steps.css';


const ConfirmStep = (props) => {
    const slugify = props.slug; 
    const domain = process.env.REACT_APP_DOMAIN_SHOP_ONLINE;
    
    const urlShop = `http://${slugify}.${domain}`;
    console.log("Value of URLShop : ", urlShop);
    
    return (
        <div className='new-boutique__controls'>
            <div className='new-boutique__image'>
                <img src="/img/svg/constructPaint.svg" alt="madebyme confirmation" />
            </div>

            <div className='new-boutique__control-text'>
                <p className='new-boutique__confirm'>Votre boutique est prête ;)</p>

                <p className='new-boutique__confirm'>On vient de vous envoyer un mail à<br />
                    <span className='sellerMail'>{props.onUserMail}</span><br/>
                    On vous explique comment ça fonctionne !</p>
            </div>

            <div className='new-boutique__actions'>
                <BtnLoad urlShop={urlShop}/>
            </div>
            <div></div>
        </div>
    )
};

export default ConfirmStep;
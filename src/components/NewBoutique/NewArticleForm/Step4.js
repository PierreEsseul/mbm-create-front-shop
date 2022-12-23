import React from 'react';
import ProgressBar from '../ProgressBar';

const Step4 = (props) => {

    return (
        <div className='new-boutique__controls'>
            <ProgressBar step={4}/>
            <p className='new-boutique__control'>Comment vos clients reçoivent leurs commandes ?</p>
            <div className='new-boutique__checkBox'>
                <label>
                <input 
                    type="checkbox" 
                    id='delivery'
                    value={props.onValueDelivery}
                    checked={props.onCheckedDelivery}
                    onChange={props.onChangeDelivery} />
                Livraison</label>
                <label>
                <input 
                    type="checkbox" 
                    id='pickup'
                    value={props.onValuePickup}
                    checked={props.onCheckedPickup}
                    onChange={props.onChangePickup} />
                A retirer en boutique</label>
            </div>
        </div>
    );
}

export default Step4; 
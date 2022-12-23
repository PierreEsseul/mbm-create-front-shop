import React from 'react';
import ProgressBar from '../ProgressBar';

const Step5 = (props) => {
    return (
        <div className='new-boutique__controls'>
            <ProgressBar step={5}/>
            <p className='new-boutique__control'>Enfin, comment voulez-vous que vos clients puissent vous régler ?</p>
            <div className='new-boutique__checkBox'>
                <label>
                <input 
                    type="checkbox" 
                    id='card'
                    value={props.onValueCard}
                    checked={props.onCheckedCard}
                    onChange={props.onChangeCard} />
                Carte bancaire</label>
                <label>
                <input 
                    type="checkbox" 
                    id='cash'
                    value='cash'
                    checked={props.onCheckedCash}
                    onChange={props.onChangeCash} />
                Espèce</label>
            </div>
        </div>
    );
}

export default Step5; 
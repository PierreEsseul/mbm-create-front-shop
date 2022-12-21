import React, {useState} from 'react';
import ProgressBar from '../ProgressBar';

const Step5 = (props) => {
    const [checkPayments, setCheckPayments] = useState('');

    const paymentChangeHandler = (event) => {
        const payment = event.target.value;
        if (event.target.checked) {
            setCheckPayments([...checkPayments, payment]);
            console.log([...checkPayments, payment]);
        } else {
            setCheckPayments(checkPayments.filter((f) => f !== payment));
            console.log(checkPayments.filter((f) => f !== payment));
        }
    };

    return (
        <div className='new-boutique__controls'>
            <ProgressBar step={5}/>
            <p className='new-boutique__control'>Enfin, comment voulez-vous que vos clients puissent vous régler ?</p>
            <div className='new-boutique__checkBox'>
                <label>
                <input 
                    type="checkbox" 
                    id='card'
                    value='card'
                    checked={checkPayments.includes('card')}
                    onChange={paymentChangeHandler} />
                Carte bancaire</label>
                <label>
                <input 
                    type="checkbox" 
                    id='cash'
                    value='cash'
                    checked={checkPayments.includes('cash')}
                    onChange={paymentChangeHandler} />
                Espèce</label>
            </div>
            <div className='new-boutique__actions'>
                <button type='submit'>Enregistrer ma liste d'article(s)</button>
            </div>
        </div>
    );
}

export default Step5; 
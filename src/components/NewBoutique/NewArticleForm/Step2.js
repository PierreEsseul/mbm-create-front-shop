import React, {useState} from 'react';
import ProgressBar from '../ProgressBar';

const Step2 = (props) => {
    const [enteredShopName, setEnteredShopName] = useState('');

    const shopNameChangeHandler = (event) => {
        setEnteredShopName(event.target.value);
        console.log(event.target.value);
    };

    return (
        <div className='new-boutique__controls'> 
            <ProgressBar step={2}/>
            <div className='new-boutique__control'>
                <label>Comment s'appelle votre boutique ?</label>
                <input 
                    type="text" 
                    value={enteredShopName}
                    onChange={shopNameChangeHandler} />
            </div>

            <div className='new-boutique__actions'>
                <button onClick={props.onNext}>Etape suivante</button>
            </div>
        </div>
    );
}

export default Step2; 
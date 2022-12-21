import React, {useState} from 'react';

import ProgressBar from '../ProgressBar';

import './Steps.css';

const Step1 = (props) => {
    const [enteredMail, setEnteredMail] = useState('');

    const mailChangeHandler = (event) => {
        setEnteredMail(event.target.value);
        console.log(event.target.value);
    };

    return (
        <div className='new-boutique__controls'>
            <ProgressBar step={1}/>
            <div className='new-boutique__control'>
                <label>Commençons, quel est votre email ?</label>
                <input 
                    type="email" 
                    value={enteredMail}
                    onChange={mailChangeHandler} />
            </div>
            <div className='new-boutique__actions'>
                <button onClick={props.onNext}>Etape suivante</button>
            </div>
        </div>
    );
}

export default Step1;  
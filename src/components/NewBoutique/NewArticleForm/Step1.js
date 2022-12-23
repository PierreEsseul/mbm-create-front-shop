import React from 'react';

import ProgressBar from '../ProgressBar';

import './Steps.css';

const Step1 = (props) => {
    return (
        <div className='new-boutique__controls'>
            <ProgressBar step={1}/>
            <div className='new-boutique__control'>
                <label>Commençons, quel est votre email ?</label>
                <input  
                    id="email" 
                    name="email"
                    type="email" 
                    value={props.onValue}
                    onChange={props.onChange} 
                    autoFocus/>
            </div>
        </div>
    );
}

export default Step1;  
import React from 'react';

import ProgressBar from '../ProgressBar';

import './Steps.css';

const Step1 = (props) => {
    return (
        <div>
            <ProgressBar step={1}/>
            <div className='new-boutique__controls'>
                <div className='new-boutique__control'>
                    <label>Commençons, quel est votre email ?</label>
                    <input  
                        id="email" 
                        name="email"
                        type="email" 
                        value={props.onValue}
                        onChange={props.onChange}
                        placeholder="votre@mail.fr" 
                        autoFocus />
                </div>
            </div>
        </div>
    );
}

export default Step1;  
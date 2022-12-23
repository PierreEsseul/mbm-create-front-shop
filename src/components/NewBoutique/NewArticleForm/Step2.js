import React from 'react';
import ProgressBar from '../ProgressBar';

const Step2 = (props) => {
    

    return (
        <div className='new-boutique__controls'> 
            <ProgressBar step={2}/>
            <div className='new-boutique__control'>
                <label>Comment s'appelle votre boutique ?</label>
                <input 
                    name="shopName"
                    id="shopName"
                    type="text" 
                    value={props.onValue}
                    onChange={props.onChange}
                    autoFocus />
            </div>
        </div>
    );
}

export default Step2; 
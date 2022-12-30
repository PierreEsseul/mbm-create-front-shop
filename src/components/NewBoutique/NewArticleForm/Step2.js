import React from 'react';
import ProgressBar from '../ProgressBar';

const Step2 = (props) => {
    

    return (
        <div>
            <ProgressBar step={2}/>
            <div className='new-boutique__controls'> 
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
        </div>
    );
}

export default Step2; 
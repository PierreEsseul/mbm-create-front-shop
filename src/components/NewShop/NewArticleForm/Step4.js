import React, { useState } from 'react';
import ProgressBar from '../ProgressBar';


const Step4 = (props) => {
  const [isChecked, setIsChecked] = useState(false);
  

  const handleCheckboxChange = (event) => {
    if (event.target.id === 'delivery') {
        props.onChangeDelivery(event);
        
    } else if (event.target.id === 'collect') {
            setIsChecked(event.target.checked);
            props.onChangeCollect(event);
    } 
    
  }

  return (
    <div>
      <ProgressBar step={4}/>
  
        <div className='new-boutique__controls'>
            <p className='new-boutique__control'>Comment vos clients reçoivent leurs commandes ?</p>
            <div className='new-boutique__checkBox'>
                <label>
                    <input
                    type="checkbox"
                    id='delivery'
                    value={props.onValueDelivery}
                    checked={props.onCheckedDelivery}
                    onChange={handleCheckboxChange}
                    />
                    Livraison
                </label>
                <label>
                    <input
                    type="checkbox"
                    id='collect'
                    value={props.onValueCollect}
                    checked={props.onCheckedCollect}
                    onChange={handleCheckboxChange}
                    />
                    A retirer en boutique
                </label>
            </div>
            {isChecked && (
                    <div className='new-boutique__control'>
                        <label>Rue :</label>
                        <input
                            type="text"
                            name="street"
                            value={props.onValueStreet}
                            onChange={props.onChangeStreet} 
                        />
                        <label>Code Postal :</label>
                        <input
                            type="number"
                            name="postalCode"
                            value={props.onValuePostalCode}
                            onChange={props.onChangePostalCode}
                        />
                        <label>Ville :</label>
                        <input
                            type="text"
                            name="city"
                            value={props.onValueCity}
                            onChange={props.onChangeCity}
                        />
                        <label>Heures d'ouverture :</label>
                        <input
                            type="text"
                            name="hours"
                            value={props.onValueHours}
                            onChange={props.onChangeHours}
                        />
                        <label>Numéro de téléphone :</label>
                        <input
                            type="number"
                            name="phoneNumber"
                            value={props.onValuePhone}
                            onChange={props.onChangePhone}
                        /> 
                    </div>  
                )}
        </div>
    </div>
  );
}

export default Step4; 
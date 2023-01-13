import React, { useState } from 'react';
import ProgressBar from '../ProgressBar';


const Step4 = (props) => {
  const [isChecked, setIsChecked] = useState(false);
  

  const handleCheckboxChange = (event) => {
    if (event.target.id === 'collect') {
      setIsChecked(event.target.checked);
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
              onChange={props.onChangeDelivery}
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
            <div className='new-boutique__controls'>
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
                    /><br />
                    <label>Ville :</label>
                    <input
                        type="text"
                        name="city"
                        value={props.onValueCity}
                        onChange={props.onChangeCity}
                    /><br />
                    <label>Heures :</label>
                    <input
                        type="text"
                        name="hours"
                        value={props.onValueHours}
                        onChange={props.onChangeHours}
                    /><br />
                    <label>Numéro de téléphone :</label>
                    <input
                        type="number"
                        name="phoneNumber"
                        value={props.onValuePhone}
                        onChange={props.onChangePhone}
                    /><br />
                </div>
            </div>
        )}
      </div>
    </div>
  );
}

export default Step4; 
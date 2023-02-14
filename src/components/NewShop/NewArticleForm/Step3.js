import React, {useState} from 'react';

import ProgressBar from '../ProgressBar';
import PopupDimImg from '../../PopupDimImg/PopupDimImg';

const Step3 = (props) => {
    

    const [open, setOpen] = useState(false);


    function openPopup(){
        setOpen(true);
    }

    return (
        <div>
            <ProgressBar step={3} />
            <div className='new-boutique__controls'>
                <h2>Enregistrement de vos articles</h2>
                <div className='new-boutique__control'>
                    <label>Nom de l'article :</label>
                    <input 
                        type="text" 
                        name="articleName" 
                        id="articleName"
                        value={props.onValueArticle}
                        onChange={props.onChangeArticle} 
                        autoFocus />
                </div>
                <div className='new-boutique__control'>
                    <textarea cols="40" rows="5"
                        id="description"
                        placeholder='Ajouter votre description...'
                        value={props.onValueDescription}
                        onChange={props.onChangeDescription}
                    ></textarea>
                </div>
                <div className='new-boutique__control'>
                    <button onClick={openPopup} className='dowload-btn'>Télécharger une photo</button>
                    {open && (<PopupDimImg onChangePhoto={props.onChangePhoto} closePopup={() => {setOpen(false)}}/>)}
                    {props.onValuePhoto && <p>( -- Image bien chargée -- )</p>}
                </div>
                <div className='new-boutique__control'>
                    <label>Prix de l'article :</label>
                    <input type="number"
                        id="price"
                        name="price"
                        min="0.01" 
                        step="0.01"  
                        value={props.onValuePrice} 
                        onChange={props.onChangePrice} />
                </div>
            </div>
        </div>
    );
}

export default Step3; 
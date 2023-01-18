import React from 'react';

import ProgressBar from '../ProgressBar';


const Step3 = (props) => {
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
                    <label>Télécharger une photo :</label>
                    <input type="file" 
                        id="image" 
                        name="image" 
                        accept="image/*" 
                        onChange={props.onChangePhoto} />
                    {props.onnValuePhoto && <p>{props.onnValuePhoto.name}</p>}
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
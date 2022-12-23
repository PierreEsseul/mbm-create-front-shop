import React, {useState} from 'react';
import ProgressBar from '../ProgressBar';

const Step3 = (props) => {
    const [isEnable, setIsEnable] = useState(false);

    const saveArticleDataHandler = (enteredArticleData) => {
        const articleData = {
            ...enteredArticleData,
            id: Math.floor((Math.random()*10).toString()),
        };
        props.onAddArticle(articleData);
    };

    const startEnableHandler = () => {
        setIsEnable(true);
    };

    return (
        <div className='new-boutique__controls'>
            <ProgressBar step={3}/>
            <div className='new-boutique__control'>
                <label>Nom de l'article :</label>
                <input 
                    type="text" 
                    name="articleName" 
                    id="articleName"
                    value={props.onValueArticle}
                    onChange={props.onChangeArticle} 
                    autoFocus/>
            </div>
            <div className='new-boutique__control'>
                <textarea cols="40" rows="5"
                    id="description"
                    placeholder='Ajouter une description...'
                    value={props.onValueDescription}
                    onChange={props.onChangeDescription}
                ></textarea>
            </div>
            <div className='new-boutique__control'>
                <label>Télécharger une photo :</label>
                <input type="file" 
                    id="photo" 
                    name="photo" 
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
                    onChange={props.onChangePrice}/>
            </div>
            <div className='new-boutique__actions'>
                <button onClick={props.onPrevious}>Précédent</button>    
                {!isEnable && (
                    <button type="submit" onClick={startEnableHandler}>Enregistrer</button>
                )}
                {isEnable && (
                <>
                    <button type='button' onClick={saveArticleDataHandler}>Ajouter article</button>
                    <button type='button' onClick={props.onNext}>Suivant</button>
                </>
                )}
            </div>
        </div>
    );
}

export default Step3; 
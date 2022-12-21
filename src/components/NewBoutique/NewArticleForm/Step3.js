import React, {useState} from 'react';
import ProgressBar from '../ProgressBar';

const Step3 = (props) => {
    const [enteredArticleName, setEnteredArticleName] = useState('');
    const [enteredDescription, setEnteredDescription] = useState('');
    const [enteredImage, setEnteredImage] = useState(null);
    const [enteredAmount, setEnteredAmount] = useState('');

    const articleNameChangeHandler = (event) => {
        setEnteredArticleName(event.target.value);
        console.log(event.target.value);
    };

    const descriptionChangeHandler = (event) => {
        setEnteredDescription(event.target.value);
        console.log(event.target.value);
    };

    const fileChangeHandler = (event) => {
        setEnteredImage(event.target.files[0]);
        console.log(event.target.files[0]);
    }    
    
    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
        console.log(event.target.value);
    };

    const [isEnable, setIsEnable] = useState(false);

    const saveArticleDataHandler = (enteredArticleData) => {
        const articleData = {
            ...enteredArticleData,
            id: Math.floor((Math.random()*10).toString()),
        };
        props.onAddArticle(articleData);
        setIsEnable(false);
    };

    const startEditingHandler = () => {
        setIsEnable(true);
    };

    return (
        <div className='new-boutique__controls'>
            <ProgressBar step={3}/>
            <div className='new-boutique__control'>
                <label>Nom de l'article :</label>
                <input 
                    type="text" 
                    value={enteredArticleName}
                    onChange={articleNameChangeHandler} />
            </div>
            <div className='new-boutique__control'>
                <textarea cols="40" rows="5"
                    placeholder='Ajouter une description...'
                    value={enteredDescription}
                    onChange={descriptionChangeHandler}
                ></textarea>
            </div>
            <div className='new-boutique__control'>
                <label>Télécharger une photo :</label>
                <input type="file" 
                    id="photo" 
                    name="photo" 
                    accept="image/*" 
                    onChange={fileChangeHandler} />
                {enteredImage && <p>{enteredImage.name}</p>}
            </div>
            <div className='new-boutique__control'>
                <label>Prix de l'article :</label>
                <input type="number" 
                    min="0.01" 
                    step="0.01"  
                    value={enteredAmount} 
                    onChange={amountChangeHandler}/>
            </div>
            <div className='new-boutique__actions'>
                {!isEnable && (
                    <button type={startEditingHandler}>Enregistrer article</button>
                )}
                {isEnable && (
                <>
                    <button type={saveArticleDataHandler}>Ajouter article</button>
                    <button onClick={props.onNext}>Etape suivante</button>
                </>
                )}
            </div>
        </div>
    );
}

export default Step3; 
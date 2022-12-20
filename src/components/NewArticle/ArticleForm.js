import React, {useState, useRef} from 'react';

import './ArticleForm.css';

const ArticleForm = (props) => {
    const [enteredMail, setEnteredMail] = useState('');
    const [enteredShopName, setEnteredShopName] = useState('');
    const [enteredArticleName, setEnteredArticleName] = useState('');
    const [enteredDescription, setEnteredDescription] = useState('');
    const fileInput = useRef(null);
    const [enteredAmount, setEnteredAmount] = useState('');
    const [checkRecovers, setCheckRecovers] = useState('');
    const [checkPayments, setCheckPayments] = useState('');

    const mailChangeHandler = (event) => {
        setEnteredMail(event.target.value);
    };

    const shopNameChangeHandler = (event) => {
        setEnteredShopName(event.target.value);
    };

    const articleNameChangeHandler = (event) => {
        setEnteredArticleName(event.target.value);
    };

    const descriptionChangeHandler = (event) => {
        setEnteredDescription(event.target.value);
    };
    
    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    };

    const recoverChangeHandler = (event) => {
        const recover = event.target.value;
        if (event.target.checked) {
            setCheckRecovers([...checkRecovers, recover]);
        } else {
            setCheckRecovers(checkRecovers.filter((f) => f !== recover));
        }
    };

    const paymentChangeHandler = (event) => {
        const payment = event.target.value;
        if (event.target.checked) {
            setCheckPayments([...checkPayments, payment]);
        } else {
            setCheckPayments(checkPayments.filter((f) => f !== payment));
        }
    };


    const submitHandler = (event) => {
        event.preventDefault();

        setEnteredMail('');
        setEnteredShopName('');
        setEnteredArticleName('');
        setEnteredDescription('');
        const file = fileInput.current.files[0];
        console.log(file);
        setEnteredAmount('');
        setCheckRecovers('');
        setCheckPayments('');
        console.log(setCheckRecovers); 
        console.log(setCheckPayments);               
    };
    

    return (
        <form onSubmit={submitHandler}>
            <div className='new-article__controls'>
                <div className='new-article__control'>
                    <label>Commençons, quel est votre email ?</label>
                    <input 
                        type="email" 
                        value={enteredMail}
                        onChange={mailChangeHandler} />
                </div>
                <div className='new-article__control'>
                    <label>Comment s'appelle votre boutique ?</label>
                    <input 
                        type="text" 
                        value={enteredShopName}
                        onChange={shopNameChangeHandler} />
                </div>
                <div className='new-article__control'>
                    <label>Nom de l'article</label>
                    <input 
                        type="text" 
                        value={enteredArticleName}
                        onChange={articleNameChangeHandler} />
                </div>
                <div className='new-article__control'>
                    <textarea cols="40" rows="10"
                        placeholder='Ajouter une description...'
                        value={enteredDescription}
                        onChange={descriptionChangeHandler}
                    ></textarea>
                </div>
                <div className='new-article__control'>
                    <label>Télécharger une photo</label>
                    <input type="file" 
                        id="photo" 
                        name="photo" 
                        accept="image/*" 
                        ref={fileInput} />
                </div>
                <div className='new-article__control'>
                    <label>Prix de l'article</label>
                    <input type="number" 
                        min="0.01" 
                        step="0.01"  
                        value={enteredAmount} 
                        onChange={amountChangeHandler}/>
                </div>
                <div>
                    <p className='new-article__control'>Comment vos clients reçoivent leurs commandes ?</p>
                    <div className='new-article__checkBox'>
                        <label>
                        <input 
                            type="checkbox" 
                            id='delivery'
                            value='delivery'
                            checked={checkRecovers.includes('delivery')}
                            onChange={recoverChangeHandler} />
                        Livraison</label>
                        <label>
                        <input 
                            type="checkbox" 
                            id='pickup'
                            value='pickup'
                            checked={checkRecovers.includes('pickup')}
                            onChange={recoverChangeHandler} />
                        A retirer en boutique</label>
                    </div>
                </div>
                <div>
                    <p className='new-article__control'>Enfin, comment voulez-vous que vos clients puissent vous régler ?</p>
                    <div className='new-article__checkBox'>
                        <label>
                        <input 
                            type="checkbox" 
                            id='card'
                            value='card'
                            checked={checkPayments.includes('card')}
                            onChange={paymentChangeHandler} />
                        Carte bancaire</label>
                        <label>
                        <input 
                            type="checkbox" 
                            id='cash'
                            value='cash'
                            checked={checkPayments.includes('cash')}
                            onChange={paymentChangeHandler} />
                        Espèce</label>
                    </div>
                </div>
            </div>
            <div className='new-article__actions'>
                <button type='submit'>Enregistrer ma liste d'article(s)</button>
            </div>
        </form>
    );
};

export default ArticleForm;
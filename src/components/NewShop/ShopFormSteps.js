import React, { useState, useEffect } from 'react';
import './ShopFormSteps.css';

import Step1 from './NewArticleForm/Step1';
import Step2 from './NewArticleForm/Step2';
import Step3 from './NewArticleForm/Step3';
import Step4 from './NewArticleForm/Step4';
import Step5 from './NewArticleForm/Step5';
import ConfirmStep from './NewArticleForm/ConfirmStep';
import { Popup } from '../Popup/Popup';

import saveImage from '../../Utilitaire/saveImage';
import addShopHandler from '../Back/apiShop.js';

// Firebase - (remove if necessary)
// import {firestore} from "../../Utilitaire/Firebase";
// import {addDoc, collection} from "@firebase/firestore"


const ShopFormSteps = (props, title) => {

    useEffect(() => {
        document.title = "MadeByMe | Créer votre boutique"
    }, []);

    const [currentStep, setCurrentStep] = useState(0);
    const [enteredMail, setEnteredMail] = useState('');
    const [enteredShopName, setEnteredShopName] = useState('');
    const [enteredArticleName, setEnteredArticleName] = useState('');
    const [enteredDescription, setEnteredDescription] = useState('');
    const [enteredImage, setEnteredImage] = useState(null);
    const [enteredAmount, setEnteredAmount] = useState('');
    const [checkRecovers, setCheckRecovers] = useState('');
    const [enteredAddress, setAddress] = useState({
        street: '',
        postalCode: '',
        city: '',
        hours:'',
        phoneNumber:''
      });
    const [checkPayments, setCheckPayments] = useState('');

    const [open, setOpen] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);
    const [articles, setArticles] = useState([]);
    const [urlShop, setUrlShop] = useState(null);

    

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

    const fileChangeHandler = (event) => {
        console.log("Value event target files[0] : ", {
          file: event.target.files[0],
          type: typeof event.target.files[0],
        });
        let file = event.target.files[0];
        setEnteredImage(file);
    }    
    
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

    const adressesChangeHandler = (event) => {
            setAddress({ ...enteredAddress, [event.target.name]: event.target.value });
    }

    const paymentChangeHandler = (event) => {
        const payment = event.target.value;
        if (event.target.checked) {
            setCheckPayments([...checkPayments, payment]);
        } else {
            setCheckPayments(checkPayments.filter((f) => f !== payment));
        }
    };

    const formSteps = [
        <Step1 
            onValue={enteredMail}
            onChange={mailChangeHandler} />,
        <Step2 
            onValue={enteredShopName}
            onChange={shopNameChangeHandler} />,
        <Step3 
            onValueArticle={enteredArticleName}
            onChangeArticle={articleNameChangeHandler}
            onValueDescription={enteredDescription}
            onChangeDescription={descriptionChangeHandler}
            onValuePhoto={enteredImage}
            onChangePhoto={fileChangeHandler}
            onValuePrice={enteredAmount}
            onChangePrice={amountChangeHandler} />,
        <Step4 
            onValueDelivery={'delivery'}
            onCheckedDelivery={checkRecovers.includes('delivery')}
            onChangeDelivery={recoverChangeHandler}
            onValueCollect={'collect'}
            onCheckedCollect={checkRecovers.includes('collect')}
            onChangeCollect={recoverChangeHandler} 
            onValueStreet={enteredAddress.street}
            onChangeStreet={adressesChangeHandler}
            onValuePostalCode={enteredAddress.postalCode}
            onChangePostalCode={adressesChangeHandler}
            onValueCity={enteredAddress.city}
            onChangeCity={adressesChangeHandler}
            onValueHours={enteredAddress.hours}
            onChangeHours={adressesChangeHandler}
            onValuePhone={enteredAddress.phoneNumber} 
            onChangePhone={adressesChangeHandler} />,
        <Step5 
            onValueCb={'cb'}
            onCheckedCb={checkPayments.includes('cb')}
            onChangeCb={paymentChangeHandler}
            onValueCash={'cash'}
            onCheckedCash={checkPayments.includes('cash')}
            onChangeCash={paymentChangeHandler} />,
        <ConfirmStep
            onUserMail={enteredMail} 
            urlShop={urlShop}/>,
    ];

    const saveArticleDataHandler = async () => {
        
        if (enteredArticleName && enteredDescription && !!enteredAmount){
            setOpen(true);

            const article = {
                articleName: enteredArticleName,
                description: enteredDescription,
                image: enteredImage,
                amount: enteredAmount
            };

            setEnteredArticleName('');
            setEnteredDescription('');
            setEnteredImage(null);
            setEnteredAmount('');
            
            try {
                const imageUrl = article.image ? await saveImage(article.image) : null;
                article.image = imageUrl;
                setArticles([...articles, article]);

            } catch (err) {
                console.log('err :>> ', err);
            }

        }
    };

    const submitHandler = async (event) => {
        event.preventDefault();

        const shopData = {
            mail: enteredMail,
            shopName: enteredShopName,
            recover: checkRecovers,
            address: enteredAddress,
            payment: checkPayments,
            articles: articles,
        }

        console.log('Value shopData in ShopFormStep : ', shopData);
        
        // Penser a mettre un loader sur le bouton pour cliquer dessus uniquement lors du retour de l'api
        // loader hidden
        addShopHandler(shopData).then(data => {
            console.log('data: ', data);

            // A remplir avec data.urlShopApi (l'url retourné par le back)
            setUrlShop(null);
            // loader ok
        });

        if(currentStep === 4){
            goToNextStep();
        }
    };

    function goToPreviousStep() {
        setErrorMessage(null);
        setCurrentStep(currentStep - 1);
    }

    function goToNextStep(event) {
        setErrorMessage(null);

        const inputs = [[enteredMail], [enteredShopName], [enteredArticleName, enteredDescription, enteredAmount], [checkRecovers], [checkPayments]];
        if (currentStep === 2){
            saveArticleDataHandler();            
        }

        if (currentStep === 0){
            const isEmail = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(inputs[0][0]);

            if (isEmail) {
                setCurrentStep(currentStep + 1);
            } else {
                setErrorMessage('Vous devez saisir une adresse mail valide');
                setEnteredMail(enteredMail);
            }
        }else if (inputs[currentStep].every(input => input.length) || articles.length !== 0){
            setCurrentStep(currentStep + 1);
        }else {
            setErrorMessage('Veuillez renseigner tous les champs');
            setEnteredArticleName(enteredArticleName);
            setEnteredDescription(enteredDescription);
            setEnteredImage(enteredImage);
            setEnteredAmount(enteredAmount);
        }
    }

    return (
        <div className='body'> 
            <form onSubmit={submitHandler}>
                {formSteps[currentStep]}
                <div className='new-boutique__errorMessage'>
                    {errorMessage && (
                        <div>{errorMessage}</div>
                    )}
                </div>
                <div className='new-boutique__actions'>
                    {currentStep === 2 && (
                        <button type="button" onClick={saveArticleDataHandler} id='addArticle'>Ajouter un autre article</button>
                    )} 
                    <Popup 
                        text="Votre article est bien enregistré" 
                        open={open} 
                        closePopup={() => setOpen(false)} />
                    {currentStep < 4 && (
                        <button type='button' onClick={goToNextStep}>Suivant</button>
                    )}
                    {currentStep === 4 && (
                        <button type='submit'>Enregistrer votre Boutique</button>
                    )}
                </div>

                {currentStep > 0 && currentStep < 5 && (
                <div className='new-boutique__arrows'>
                    <button type='button' onClick={goToPreviousStep}><img src="/img/png/arrowUp.png" alt="bouton pour revenir sur la page précédente" /></button>
                    <button type='button' onClick={goToNextStep}><img src="/img/png/arrowDown.png" alt="bouton pour passer à la page suivante" /></button>
                </div>
                )}
            </form>
        </div>
            
    );
};

export default ShopFormSteps;
import React, {useState} from 'react';


import Step1 from './NewArticleForm/Step1';
import Step2 from './NewArticleForm/Step2';
import Step3 from './NewArticleForm/Step3';
import Step4 from './NewArticleForm/Step4';
import Step5 from './NewArticleForm/Step5';
import ConfirmStep from './NewArticleForm/ConfirmStep';

const BoutiqueFormSteps = (props) => {
    const [currentStep, setCurrentStep] = useState(0);
    const [enteredMail, setEnteredMail] = useState('');
    const [enteredShopName, setEnteredShopName] = useState('');
    const [enteredArticleName, setEnteredArticleName] = useState('');
    const [enteredDescription, setEnteredDescription] = useState('');
    const [enteredImage, setEnteredImage] = useState(null);
    const [enteredAmount, setEnteredAmount] = useState('');
    const [checkRecovers, setCheckRecovers] = useState('');
    const [checkPayments, setCheckPayments] = useState('');

    const mailChangeHandler = (event) => {
        setEnteredMail(event.target.value);
        console.log(event.target.value);
    };

    const shopNameChangeHandler = (event) => {
        setEnteredShopName(event.target.value);
        console.log(event.target.value);
    };

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

    const recoverChangeHandler = (event) => {
        const recover = event.target.value;
        if (event.target.checked) {
            setCheckRecovers([...checkRecovers, recover]);
            console.log([...checkRecovers, recover]);
        } else {
            setCheckRecovers(checkRecovers.filter((f) => f !== recover));
            console.log(checkRecovers.filter((f) => f !== recover));            
        }
    };

    const paymentChangeHandler = (event) => {
        const payment = event.target.value;
        if (event.target.checked) {
            setCheckPayments([...checkPayments, payment]);
            console.log([...checkPayments, payment]);
        } else {
            setCheckPayments(checkPayments.filter((f) => f !== payment));
            console.log(checkPayments.filter((f) => f !== payment));
        }
    };

    const submitHandler = (event) => {
        event.preventDefault();

        const boutiqueData = {
            mail: enteredMail,
            shopName: enteredShopName,
            articleName: enteredArticleName,
        }

        props.onSaveBoutiqueData(boutiqueData);

        setEnteredMail('');
        setEnteredShopName('');
        setEnteredArticleName('');
        setEnteredDescription('');
        setEnteredImage('');
        setEnteredAmount('');
        setCheckRecovers('');
        setCheckPayments('');              
    };

    function goToPreviousStep() {
        setCurrentStep(currentStep - 1);
    }

    function goToNextStep() {
        setCurrentStep(currentStep + 1);
    }
    const formSteps = [
        <Step1 
            onValue={enteredMail}    
            onChange={mailChangeHandler} 
            onNext={goToNextStep} />,
        <Step2 
            onValue={enteredShopName}
            onChange={shopNameChangeHandler}
            onNext={goToNextStep} 
            onPrevious={goToPreviousStep} />,
        <Step3 
            onValueArticle={enteredArticleName}
            onChangeArticle={articleNameChangeHandler}
            onValueDescription={enteredDescription}
            onChangeDescription={descriptionChangeHandler}
            onValuePhoto={enteredImage}
            onChangePhoto={descriptionChangeHandler}
            onValuePrice={enteredAmount}
            onChangePrice={amountChangeHandler}
            onNext={goToNextStep} 
            onPrevious={goToPreviousStep} />,
        <Step4 
            onValueDelivery={'delivery'}
            onCheckedDelivery={checkRecovers.includes('delivery')}
            onChangeDelivery={recoverChangeHandler}
            onValuePickup={'pickup'}
            onCheckedPickup={checkRecovers.includes('pickup')}
            onChangePickup={recoverChangeHandler}
            onNext={goToNextStep}
            onPrevious={goToPreviousStep} />,
        <Step5 
            onValueCard={'card'}
            onCheckedCard={checkPayments.includes('card')}
            onChangeCard={paymentChangeHandler}
            onValueCash={'cash'}
            onCheckedCash={checkPayments.includes('cash')}
            onChangeCash={paymentChangeHandler}
            onNext={goToNextStep}
            onPrevious={goToPreviousStep} />,
        <ConfirmStep />,
    ];

    return (
            <form onSubmit={submitHandler}>
                    {formSteps[currentStep]}
            </form>
      );
};

export default BoutiqueFormSteps;
import React, {useState} from 'react';


import Step1 from './NewArticleForm/Step1';
import Step2 from './NewArticleForm/Step2';
import Step3 from './NewArticleForm/Step3';
import Step4 from './NewArticleForm/Step4';
import Step5 from './NewArticleForm/Step5';

const BoutiqueFormSteps = (props) => {
    const [currentStep, setCurrentStep] = useState(0);
    const formSteps = [
        <Step1 onNext={goToNextStep} />,
        <Step2 onNext={goToNextStep}/>,
        <Step3 onNext={goToNextStep}/>,
        <Step4 onNext={goToNextStep}/>,
        <Step5 />,
    ];

    function goToNextStep() {
        setCurrentStep(currentStep + 1);
    }

    const submitHandler = (event) => {
        event.preventDefault();

        // setEnteredMail('');
        // setEnteredShopName('');
        // setEnteredArticleName('');
        // setEnteredDescription('');
        // setEnteredImage('');
        // setEnteredAmount('');
        // setCheckRecovers('');
        // setCheckPayments('');              
    };

    return (
            <form onSubmit={submitHandler}>
                    {formSteps[currentStep]}
            </form>
      );
};

export default BoutiqueFormSteps;
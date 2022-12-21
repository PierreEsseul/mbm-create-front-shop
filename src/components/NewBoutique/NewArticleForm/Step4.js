import React, {useState} from 'react';
import ProgressBar from '../ProgressBar';

const Step4 = (props) => {
    const [checkRecovers, setCheckRecovers] = useState('');

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

    return (
        <div className='new-boutique__controls'>
            <ProgressBar step={4}/>
            <p className='new-boutique__control'>Comment vos clients reçoivent leurs commandes ?</p>
            <div className='new-boutique__checkBox'>
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
            <div className='new-boutique__actions'>
                <button onClick={props.onNext}>Etape suivante</button>
            </div>
        </div>
    );
}

export default Step4; 
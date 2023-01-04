import React, { useState } from 'react';
import axios from 'axios';

const GetStart = () => {
    const [enteredEmail, setEnteredEmail] = useState('');

    const emailChangeHandler = (event) => {  
        setEnteredEmail(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();

        const mbmEmail = 'hello@madebyme.app';

        axios.get('http://votreserveur.com/api/send-email', {
            params: {
                email: mbmEmail
            }
            })
            .then(response => {
            console.log(response);
            })
            .catch(error => {
            console.log(error);
            });

        setEnteredEmail('');
    }

    return (
        <div className='home-page__getStart'>
            <div>
                <h2>Prêt à lancer votre boutique ?</h2>

                <div className='create-shop'>
                    <a href="/create-shop" target="_blank" className='create-shop__btn'>Créez votre boutique !</a>
                </div>
            </div>
            <div className='home-page__getStart-image'>
                <img src="/img/confirmImg.png" alt="image de personne créant un site internet" />
            </div>
            <div className='home-page__newsletter'>
                <p>Abonnez-vous pour plus d'infos et d'actu !</p>
                <form onSubmit={submitHandler}>
                    <div>
                        <input type="email" value={enteredEmail} onChange={emailChangeHandler} placeholder="votre@mail.fr" required />
                    </div>
                    <div>
                        <button type='submit'>S'abonner</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default GetStart;
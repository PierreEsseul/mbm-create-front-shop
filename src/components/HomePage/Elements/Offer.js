import React from 'react';

const Offer = () => {
    return(
        <div className='home-page__offer'>
            <div>
                <h2>Notre Offre</h2>

                <p>En 5 min, créez votre liste de produits et commencez à vendre sur votre propre site.</p>
            </div>
            <div>
                <div className='home-page__offer-asset'>
                    <img src="/img/png/cardPersonnalisez.png" alt="image de personnalisation de votre site" />
                    <div>
                        <h3>Personnalisez</h3>
                        <p>Choisissez le style qui vous convient et personnalisez l'expérience utilisateur</p>
                    </div>
                </div>
                <div className='home-page__offer-asset'>
                    <img src="/img/png/cardAnalysez.png" alt="image d'analyse de votre site" />
                    <div>
                        <h3>Analysez</h3>
                        <p>Analysez toutes vos ventes, les produits les plus vendus pour maximisez vos gains</p>
                    </div>
                </div>
                <div className='home-page__offer-asset'>
                    <img src="/img/png/cardGagnez.png" alt="image de personne gagnante" />
                    <div>
                        <h3>Gagnez</h3>
                        <p>Devenez leader de votre marché en vous concentrant sur ce que les gens aiment : votre produit</p>
                    </div>
                </div>
                <div className='home-page__offer-asset'>
                    <img src="/img/png/cardPilotez.png" alt="image montrant des personnes qui construisent facilement leur site" />
                    <div>
                        <h3>Pilotez</h3>
                        <p>Développez votre activité facilement en pilotant toutes vos commandes</p>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Offer;
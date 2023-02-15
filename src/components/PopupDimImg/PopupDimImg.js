import React, {useState} from 'react'

import CropImage from '../../Utilitaire/Crop/CropImage'

import './PopupDimImg.css'
import saveImage from '../../Utilitaire/saveImage'


function PopupDimImg(props) {

  const [variable, setVariable] = useState(null);

  function changeSize(newSize){
    setVariable(newSize);
  }

  async function saveSelected(){
    await variable.toBlob((blob) => {
      // Gérez ici le Blob, par exemple en l'envoyant au serveur
      console.log("Value variable: ", blob);
      saveImage(blob);
    });
    props.closePopup();
  }
  
  return (
    <div className='popup-img-container'>
        <div className='popup-img-body'>
            <CropImage onCrop={changeSize}/>
            {variable && (<button onClick={saveSelected} className="valider">Valider sélection</button>)}
        </div>
    </div>
  )
}

export default PopupDimImg
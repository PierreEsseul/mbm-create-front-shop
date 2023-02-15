import React from 'react'
import { StyledDemo } from '../../Utilitaire/EasyCrop/Crop'
import './PopupDimImg.css'

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
            <StyledDemo closePopup={props.closePopup} onChangePhoto={props.onChangePhoto}/>
        </div>
    </div>
  )
}

export default PopupDimImg
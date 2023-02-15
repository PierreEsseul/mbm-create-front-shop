import React, { useState } from 'react'
import { StyledDemo } from '../../Utilitaire/EasyCrop/Crop'
import './PopupDimImg.css'

function PopupDimImg(props) {
  
  return (
    <div className='popup-img-container'>
        <div className='popup-img-body'>
<<<<<<< HEAD
            <StyledDemo closePopup={props.closePopup} imageSrc={props.imageSrc} onUpdatePhoto={props.onUpdatePhoto} openFile={props.openFile}/>
        </div>
=======
            <StyledDemo closePopup={props.closePopup} onChangePhoto={props.onChangePhoto}/>
q        </div>
>>>>>>> pierre
    </div>
  )
}

export default PopupDimImg
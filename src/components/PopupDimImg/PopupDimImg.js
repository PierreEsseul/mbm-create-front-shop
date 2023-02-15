import React from 'react'
import { StyledDemo } from '../../Utilitaire/EasyCrop/Crop'
import './PopupDimImg.css'

function PopupDimImg(props) {
  
  
  return (
    <div className='popup-img-container'>
        <div className='popup-img-body'>
            <StyledDemo closePopup={props.closePopup} imageSrc={props.imageSrc} onUpdatePhoto={props.onUpdatePhoto} openFile={props.openFile}/>
        </div>
    </div>
  )
}

export default PopupDimImg
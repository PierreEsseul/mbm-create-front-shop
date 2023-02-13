import React from 'react'

import CropImage from '../../Utilitaire/Crop/CropImage'

import './PopupDimImg.css'


function PopupDimImg() {
  
  return (
    <div className='popup-img-container'>
        <div className='popup-img-body'>
            <CropImage />
        </div>
    </div>
  )
}

export default PopupDimImg
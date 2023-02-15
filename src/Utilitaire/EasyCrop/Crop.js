import React, { useState, useCallback } from 'react'
import Cropper from 'react-easy-crop'
import Slider from '@material-ui/core/Slider'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'
import { getCroppedImg} from './CanvasUtils'
import { styles } from './style'

import './Crop.css'



const Crop = ( { classes, closePopup, imageSrc, onUpdatePhoto, openFile }) => {

  const [crop, setCrop] = useState({ x: 0, y: 0 })
  const [zoom, setZoom] = useState(1)
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null)
  const [croppedImage, setCroppedImage] = useState(null)

  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels)
  }, [])

  const saveCroppedImage = useCallback(async () => {
    try {
      const croppedImage = await getCroppedImg(
        imageSrc,
        croppedAreaPixels,
      )
      setCroppedImage(croppedImage)
      onUpdatePhoto(croppedImage)
      closePopup()
    } catch (e) {
      console.error(e)
    }
  }, [imageSrc, croppedAreaPixels]);

  return (
    <div className='main-part'>
      {imageSrc && (
        <React.Fragment>
          <div className={classes.cropContainer}>
            <Cropper
              image={imageSrc}
              crop={crop}
              zoom={zoom}
              aspect={1.06/1}
              onCropChange={setCrop}
              onCropComplete={onCropComplete}
              onZoomChange={setZoom}
            />
          </div>
          <div className={classes.controls}>
            <div className={classes.sliderContainer}>
              <Typography
                variant="overline"
                classes={{ root: classes.sliderLabel }}
              >
                Zoom
              </Typography>
              <Slider
                value={zoom}
                min={1}
                max={3}
                step={0.1}
                aria-labelledby="Zoom"
                classes={{ root: classes.slider }}
                onChange={(e, zoom) => setZoom(zoom)}
              />
            </div>
            <Button
              onClick={saveCroppedImage}
              variant="contained"
              color="black"
              classes={{ root: classes.cropButton }}
              className='validate'
            >
              Valider sélection
            </Button>
            <button onClick={() => document.getElementById('getFile').click()} style={{margin:'1rem'}} className="changePicture-in">CHANGER DE PHOTO</button>
            <input type="file" onChange={openFile} accept="image/*"  id='getFile'  style={{display:'none'}}/>
          </div>
        </React.Fragment>
      )}
    </div>
  )
}

export const StyledDemo = withStyles(styles)(Crop)



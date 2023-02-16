export const createImage = (url) =>
  new Promise((resolve, reject) => {
    const image = new Image()
    image.addEventListener('load', () => resolve(image))
    image.addEventListener('error', (error) => reject(error))
    image.setAttribute('crossOrigin', 'anonymous') // needed to avoid cross-origin issues on CodeSandbox
    image.src = url
  })

export function getRadianAngle(degreeValue) {
  return (degreeValue * Math.PI) / 180
}

/**
 * Returns the new bounding area of a rotated rectangle.
 */
export function rotateSize(width, height, rotation) {
  const rotRad = getRadianAngle(rotation)

  return {
    width:
      Math.abs(Math.cos(rotRad) * width) + Math.abs(Math.sin(rotRad) * height),
    height:
      Math.abs(Math.sin(rotRad) * width) + Math.abs(Math.cos(rotRad) * height),
  }
}

/**
 * This function was adapted from the one in the ReadMe of https://github.com/DominicTobias/react-image-crop
 */
export async function getCroppedImg(
  imageSrc,
  pixelCrop,
  rotation = 0,
  flip = { horizontal: false, vertical: false }
) {
  const image = await createImage(imageSrc);
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');

  if (!ctx) {
    return null;
  }

  // calculate bounding box of the rotated image
  const { width: bBoxWidth, height: bBoxHeight } = rotateSize(
    image.width,
    image.height,
    rotation
  );

  // set canvas size to match the bounding box, but not smaller than 340*320px
  canvas.width = Math.max(bBoxWidth, 340);
  canvas.height = Math.max(bBoxHeight, 320);

  // translate canvas context to the center
  ctx.translate(canvas.width / 2, canvas.height / 2);

  // clear the canvas with white background
  ctx.fillStyle = "#FFFFFF";
  ctx.fillRect(-canvas.width/2, -canvas.height/2, canvas.width, canvas.height);

  // translate to draw the image correctly
  ctx.scale(flip.horizontal ? -1 : 1, flip.vertical ? -1 : 1);
  ctx.translate(-image.width / 2, -image.height / 2);

  // calculate the position of the cropped area in the rotated image
  const cropX = pixelCrop.x - image.width / 2;
  const cropY = pixelCrop.y - image.height / 2;

  // draw the rotated image, centered on the canvas
  ctx.drawImage(image, 0, 0);

  if (canvas.width < 340 || canvas.height < 320) {
    // create a new blob centered on a 340x320 canvas
    const newCanvas = document.createElement('canvas');
    const newCtx = newCanvas.getContext('2d');
    newCanvas.width = 340;
    newCanvas.height = 320;
    newCtx.fillStyle = "#FFFFFF";
    newCtx.drawImage(canvas, (newCanvas.width - canvas.width) / 2, (newCanvas.height - canvas.height) / 2);
    canvas.width = newCanvas.width;
    canvas.height = newCanvas.height;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(newCanvas, 0, 0);
  }

  // croppedAreaPixels values are bounding box relative
  // extract the cropped image using these values
  const data = ctx.getImageData(
    cropX,
    cropY,
    pixelCrop.width,
    pixelCrop.height
  );

  // set canvas width and height to the cropped image size
  canvas.width = pixelCrop.width;
  canvas.height = pixelCrop.height;

  // paste the cropped image onto the canvas, centered
  ctx.putImageData(data, (canvas.width - pixelCrop.width) / 2, (canvas.height - pixelCrop.height) / 2);

  // return the cropped image as a blob URL
  return new Promise((resolve, reject) => {
    canvas.toBlob((file) => {
      resolve(URL.createObjectURL(file));
    }, 'image/jpeg');
  });
}


export async function getRotatedImage(imageSrc, rotation = 0) {
  const image = await createImage(imageSrc)
  const canvas = document.createElement('canvas')
  const ctx = canvas.getContext('2d')

  const orientationChanged =
    rotation === 90 || rotation === -90 || rotation === 270 || rotation === -270
  if (orientationChanged) {
    canvas.width = image.height
    canvas.height = image.width
  } else {
    canvas.width = image.width
    canvas.height = image.height
  }

  ctx.translate(canvas.width / 2, canvas.height / 2)
  ctx.rotate((rotation * Math.PI) / 180)
  ctx.drawImage(image, -image.width / 2, -image.height / 2)

  return new Promise((resolve) => {
    canvas.toBlob((file) => {
      resolve(URL.createObjectURL(file))
    }, 'image/png')
  })
}

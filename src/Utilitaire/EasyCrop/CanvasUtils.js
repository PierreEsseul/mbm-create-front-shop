export const createImage = (url) =>
  new Promise((resolve, reject) => {
    const image = new Image()
    image.addEventListener('load', () => resolve(image))
    image.addEventListener('error', (error) => reject(error))
    image.setAttribute('crossOrigin', 'anonymous') // needed to avoid cross-origin issues on CodeSandbox
    image.src = url
  })

  export async function getCroppedImg(
    imageSrc,
    pixelCrop,
  ) {
    const image = await createImage(imageSrc);
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
  
    if (!ctx) {
      return null;
    }
  
    // set canvas size to match the bounding box, but not smaller than 340*320px
    canvas.width = Math.max(pixelCrop.width, 340);
    canvas.height = Math.max(pixelCrop.height, 320);
  
    // clear the canvas with white background
    ctx.fillStyle = "#FFFFFF";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  
    // calculate the position of the cropped area in the original image
    const cropX = pixelCrop.x;
    const cropY = pixelCrop.y;
  
    // draw the image onto the canvas
    ctx.drawImage(image, cropX, cropY, pixelCrop.width, pixelCrop.height, 0, 0, pixelCrop.width, pixelCrop.height);
  
    // return the cropped image as a blob URL
    return new Promise((resolve, reject) => {
      canvas.toBlob((file) => {
        resolve(URL.createObjectURL(file));
      }, 'image/jpeg');
    });
  }
  

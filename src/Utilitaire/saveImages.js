import axios from "axios";

async function saveImage(image) {
    console.log("saveImage - ", image);
    const file = image;

    console.log("Value filein saveImage l.7 : ", file);
    let reader = new FileReader();
    reader.readAsDataURL(file);
    console.log("Value reader.result l.10 : ", reader.result);

    // fetch sur le back en post de reader.result
    // multipart form-data
    const url = `${process.env.REACT_APP_URL_BACK}/api/form/upload-image`;

    const formData = new FormData();
    formData.append("file", file);
    formData.append("fileName", file.name);
    console.log("Value formData in savaImages l.19", formData);

    const config = {
        headers: {
        "content-type": "multipart/form-data",
        },
    };

    const ret = await axios.post(url, formData, config).then((response) => {
        console.log("Value response.data in savaImage l.28 : ", response.data);
    });

    return "https://url_image";
    // return ret.urlImage;
}

function saveImages(images) {
  console.log("saveImage - ", images);
  for (let i = 0; i < images.length; i++) {
    const file = images[i];
    console.log("Value filein saveImage l.7 : ", file);
    let reader = new FileReader();
    reader.readAsDataURL(file);
    console.log("Value reader.result l.10 : ", reader.result);

    // fetch sur le back en post de reader.result
    // multipart form-data
    const url = `${process.env.REACT_APP_URL_BACK}/api/form/upload-image`;

    const formData = new FormData();
    formData.append("file", file);
    formData.append("fileName", file.name);
    console.log("Value formData in savaImages l.19", formData);

    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };

    axios.post(url, formData, config).then((response) => {
      console.log("Value response.data in savaImage l.28 : ", response.data);
    });
  }
}

export default saveImage;

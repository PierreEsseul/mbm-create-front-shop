import axios from "axios";

async function saveImage(image) {
    console.log("saveImage - ", image);
    const file = image;

        const route = `${process.env.REACT_APP_URL_BACK}/api/form/upload-image`;
    
        const formData = new FormData();
        formData.append("file", file, file.name); // append the file with name
        console.log("Value formData in savaImages l.19", formData);
        console.log("Value formData in savaImages l.20", file.name);
    
        const config = {
            headers: {
            "content-type": "multipart/form-data",
            },
        };
    
        try {
          const ret = await axios.post(route, formData, config);

          console.log("Value response.data in savaImage l.28 : ", ret);
          return ret.data.urlImage; // return the url of the image

        } catch (err) {
            console.log("Error: ", err);
            return "Error uploading image.";
        }
   
}

export default saveImage;



async function addShopHandler(shop) {

    try {
    const response = await fetch(
        `${process.env.REACT_APP_URL_BACK}/api/form`,
        {
        method: "POST",
        body: JSON.stringify(shop),
        headers: {
            "Content-Type": "application/json",
        },
        }
    );

    const data = await response.json();
    console.log("data:", data);

    // if (!data.ok) {
    //   throw new Error(
    //     "Une erreur est survenue, veuillez nous excuser pour la gêne occasionnée et réessayer ultérieurement."
    //   );
    // }
    } catch (error) {
        console.log('error: ', error);
        
    // setError(error.message);
    }
}


export default addShopHandler;


async function addShopHandler(shop) {

    try {
    const response = await fetch(
        "https://16fe-2a01-cb1c-103b-3a00-f9e2-da03-ce6f-5b49.ngrok.io/api/form",
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
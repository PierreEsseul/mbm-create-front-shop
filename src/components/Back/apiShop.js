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

        return data;

    } catch (error) {
        console.log('error: ', error);
        return null;
    }
}


export default addShopHandler;
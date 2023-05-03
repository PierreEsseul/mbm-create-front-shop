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
        )
        const data = await response.json();
            return data;
    } 
    catch (error) {
        return null;
    }
}

export default addShopHandler;
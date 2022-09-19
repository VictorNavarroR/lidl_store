import config from './config.js'

export const getProducts = async () => {
    const products = await fetch(`${config.apiUrl}${config.endPoints.basket}`);
    const productList = await products.json();
    return productList;
}

export const addProduct = async () => {
    const product = { "type": "Product", "title": "Ldl Product" }
    try {
        const productReq = await fetch(`${config.apiUrl}${config.endPoints.basket}`, {
            method: "POST",
            body: JSON.stringify(product),
            headers: {"Content-type": "application/json; charset=UTF-8"}
          });
    } catch (err) {
        console.error(err);
    }
    

}
import config from './config.js'
import { getSliderItems } from "./SliderService.js"

export const getProducts = async () => {
    try {
    const products = await fetch(`${config.apiUrl}${config.endPoints.basket}`);
    const productList = await products.json();
    return productList;
    } catch (err) {
        console.error(error)
    }
}

const addProductRequest = async (product) => {
    try {
        const options = {
            method: "POST",
            body: JSON.stringify(product),
            headers: {
                'Content-type': 'application/json'}
          }
        const response = await fetch(`${config.apiUrl}${config.endPoints.basket}`, options);
        if(response.status === 500) {
            return {
                error: true,
                message: 'ERROR: You trying to insert an existent product in basket.'
            }
        } else {
            const data = await response.json();
        }
        
    } catch (err) {
        console.error(err);
    }
}

export const addProduct =  async (id) => {
    const productList = await getSliderItems();
    const product = productList.filter( product => Number(product.id) === Number(id));
    const result = await addProductRequest(product[0]);

    if(result?.error) {
        confirm(result.message);
        return false
    }
    
}
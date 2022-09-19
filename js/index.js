import { carouselNext, initCarousel } from "./Carousel.js";
import { getProducts, addProduct } from "./ProductsService.js";

const carousel = document.querySelector('.carousel');
initCarousel(carousel);
const carouselBtn = document.querySelector('.carousel__scrollbtn');

const showProductsCount = async () => {
    const productQuantity = document.querySelector('.header__cart-products-quantity');
    const products = await getProducts();
    productQuantity.innerText = products.length;
}
showProductsCount();

const addProductBtn = document.querySelector('.banner__zone-btn');

addProductBtn.addEventListener('click', addProduct)
carouselBtn.addEventListener('click', () => carouselNext(carousel, 314));



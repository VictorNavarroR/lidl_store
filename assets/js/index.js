import { carouselNext, initCarousel } from "/js/Carousel.js";
import { initSlider } from "/js/Slider.js";
import { getProducts, addProduct } from "/js/ProductsService.js";
import { initAccordion } from "/js/Accordion.js";

/** carousel **/
const carousel = document.querySelector('.carousel');
initCarousel(carousel);

const carouselBtn = document.querySelector('.carousel__scrollbtn');

carouselBtn.addEventListener('click', () => carouselNext(carousel, 314));

/** basket **/
const showProductsCount = async () => {
    const productQuantity = document.querySelector('.header__cart-products-quantity');
    const products = await getProducts();
    productQuantity.innerText = products.length;
}
showProductsCount();

/** slider **/
initSlider();
const slideTab = document.querySelector('.banner__tabs');

slideTab.addEventListener('click',  (e) => {
    if (e.target.classList.contains('banner__tab')) {
      document.querySelectorAll('.slide').forEach( item => {
        item.classList.remove('slideVisible');
        item.classList.add('slideHidden');
      });
      const slideItem = document.querySelector(`.slide-${e.target.dataset.id}`);
      slideItem.classList.remove('slideHidden');
      slideItem.classList.add('slideVisible', 'fade-in');
    }
  });

  /* add function */
  const addToBasket = (element) => {
    element.addEventListener('click', async (e) => {
      if (e.target.classList.contains('banner__zone-btn')) {
        const result = await addProduct(e.target.dataset.id);
        if(typeof result === 'undefined') {
          productQuantity.innerText = Number(productQuantity.innerText) + 1; 
        }
      }
    })
  } 

 /** add to basket **/ 
const banner = document.querySelector('.banner');
const productQuantity = document.querySelector('.header__cart-products-quantity');
addToBasket(banner);

/** initAccordion **/
const accordionWrapper = document.querySelector('.accordion-wrapper');
initAccordion(accordionWrapper);
addToBasket(accordionWrapper);





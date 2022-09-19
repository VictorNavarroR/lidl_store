import { carouselNext } from "./Carousel.js";

const carousel = document.querySelector('.carousel');
const carouselBtn = document.querySelector('.carousel__scrollbtn');
carouselBtn.addEventListener('click', () => carouselNext(carousel, 314));



import config from './config.js'

export const getCarouselItems = async () => {
    const carousel = await fetch(`${config.apiUrl}${config.endPoints.carousel}`);
    const carouselItems = await carousel.json();
    return carouselItems;
}



import { getCarouselItems } from "./CarouselService.js"

export const initCarousel = async (carousel) => {
    const carouselItems = await getCarouselItems();
    const cards = document.createElement("div");
    cards.classList.add("carousel__cards");

    carousel.appendChild(cards);
    
    if(carouselItems.length > 0) {
        carouselItems.forEach(card => {
            cards.innerHTML = cards.innerHTML + `
            <div class="carousel__card">
                <div class="carousel__cardimg">
                    <img src="${card.image}" alt="ciclista">
                </div>
                <div class="carousel__cardtext">
                    <p>${card.text}</p>
                </div>
            </div>
            `
        })
    }
}
const scrolls = [];
export const carouselNext = async (carousel, moveDistance = 100) => {
    const scrollBtn = document.querySelector('.carousel__scrollbtn'); 
    carousel.scrollBy({
        left: moveDistance,
        behavior: 'smooth'
    })
    if(scrolls.includes(carousel.scrollLeft)) {
        carousel.scrollBy({
            left: -carousel.scrollLeft,
            behavior: 'smooth'
        })
        scrolls.length = 0;
    } else {
        scrolls.push(carousel.scrollLeft)

    }
}




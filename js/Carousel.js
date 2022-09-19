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

export const carouselNext = (carousel, moveDistance = 100) => {
    carousel.scrollTo({
        left: moveDistance,
        behavior: 'smooth'
    })
}




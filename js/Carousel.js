export const carouselNext = (carousel, moveDistance = 100) => {
    carousel.scrollTo({
        left: moveDistance,
        behavior: 'smooth'
    })
}




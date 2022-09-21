import { getSliderItems } from "./SliderService.js"

export const initSlider = async () => {
    const sliderItems = await getSliderItems();
    const slide = document.querySelector('.banner__slider');
    const slider = document.querySelector('.banner__tabs');

    if(sliderItems.length > 0) {
        sliderItems.forEach( (slideItem, index) => {

            slide.innerHTML = slide.innerHTML + `
            <div class="slide slide-${slideItem.id} ${ index === 0 ? 'slideVisible' : 'slideHidden'}">
                <div class="banner__zone banner__zone--left">
                    <button class="banner__zone-btn" data-id=${slideItem.id}>
                        Add to basket
                    </button>
                    <img src="${slideItem.image}" alt="ciclistas">
                </div>
                <div class="banner__zone banner__zone--right">
                    <img src="${slideItem.secondaryImage}" alt="ciclista">
                </div>
            </div>
            `

            slider.innerHTML = slider.innerHTML + `
            <div class="banner__tab" data-id="${slideItem.id}">
                ${slideItem.text}
            </div>
            `
        })
    }
}
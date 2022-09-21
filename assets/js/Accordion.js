import { getSliderItems } from "./SliderService.js"

export const initAccordion = async (accordionWrapper) => {
    const elements = await getSliderItems();
    elements.forEach(sliderItem => {
        accordionWrapper.innerHTML = accordionWrapper.innerHTML + `
        <button class="accordion">${sliderItem.text}</button>
        <div class="panel">
        <div class="slide accordeon-${sliderItem.id}">
            <div class="banner__zone banner__zone--left">
                <button class="banner__zone-btn" data-id=${sliderItem.id}>
                    Add to basket
                </button>
                <img src="${sliderItem.image}" alt="ciclistas">
            </div>
            <div class="banner__zone banner__zone--right">
                <img src="${sliderItem.secondaryImage}" alt="ciclista">
            </div>
        </div>        
        </div>`
    });

    var acc = document.getElementsByClassName("accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
        panel.style.display = "none";
        } else {
        panel.style.display = "block";
        }
    });

    }

}
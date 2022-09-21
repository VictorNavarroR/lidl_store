import config from './config.js'

export const getSliderItems = async () => {
    const slider = await fetch(`${config.apiUrl}${config.endPoints.slider}`);
    const sliderItems = await slider.json();
    return sliderItems;
}
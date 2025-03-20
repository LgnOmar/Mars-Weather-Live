// this is where the cool gets it's definition from.

const previousWeatherToggle = document.querySelector(".show-previous-weather");


const previousWeather= document.querySelector('.previous-weather');

previousWeatherToggle.addEventListener('click', () => {
    previousWeather.classList.toggle('show-weather')
})
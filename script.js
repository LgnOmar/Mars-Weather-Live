// this is where the 'cool' gets defined.
const API_URL = 'http://localhost:3000/api/weather';


const previousWeatherToggle = document.querySelector(".show-previous-weather");


const previousWeather= document.querySelector('.previous-weather');

previousWeatherToggle.addEventListener('click', () => {
    previousWeather.classList.toggle('show-weather')
})

getWeather();

function getWeather(){
    fetch(API_URL)
    .then(res => res.json())
    .then(data =>{
        const {
            sol_keys,
            validity_checks,
            ...solData
        } = data
        const temp = Object.entries(solData).map(([sol,data]) =>{
            return {
                sol: sol,
                maxTemp: data.AT?.mx,
                minTemp: data.AT?.mn,
                windSpeed: data.HWS?.av,
                windDirectionDegrees: data.WD?.most_common?.compass_degrees,
                windDirectionCardinal: data.WD?.most_common?.compass_point,
                date: data.First_UTC ? new Date(data.First_UTC) : null
            }
        })
        console.log(temp)
    })

}
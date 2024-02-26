const inputBox =  document.querySelector('.input-box');
const searchbutton =  document.getElementById('searchbtn');
const weather_image =  document.querySelector('.weather-image');
const temp =  document.querySelector('.temperature');
const descrip =  document.querySelector('.description');
const humidity =  document.getElementById('humidity');
const wind_speed =  document.getElementById('wind-speed');
const location_not_found =  document.querySelector('.location-notfound');
const weather_body = document.querySelector('.weather-body');


async function checkweather(city) {
    const api_key = "526a9ed76d7d801118a1eb34f78cd01b";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

    const weather_data = await fetch(`${url}`).then(response =>
        response.json());
        

        if (weather_data.cod === '404') {

            location_not_found.style.display = "flex";
            weather_body.style.display = "none";
            return;
            
        }
        weather_body.style.display = "flex";
        location_not_found.style.display = "none";
        temp.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°C`;
        descrip.innerHTML = `${weather_data.weather[0].description}`;
        humidity.innerHTML = `${weather_data.main.humidity}%`;
        wind_speed.innerHTML = `${weather_data.wind.speed}Km/h`;

        switch (weather_data.weather[0].main) {
            case 'Clouds':
                weather_image.src = 'image/cloud.png';
                break;
            
            case 'Clear':
                weather_image.src = '/image/clear.png';
                break;
        
            case 'Rain':
                weather_image.src = 'image/rain.png';
                break;

            case 'Mist':
                weather_image.src = 'image/mist.png';
                break;

            case 'Snow':
                weather_image.src = 'image/snow.png';
                break;

            case 'Haze':
                weather_image.src = 'image/haze.png';
                break;
        
            default:
                weather_image.src='image/cloud.png';
                break;
        }
}

searchbutton.addEventListener( 'click', ()=>{
    checkweather(inputBox.value);
});

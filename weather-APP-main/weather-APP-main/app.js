const API = `http://api.openweathermap.org/data/2.5/forecast?q=`;
const API_KEY = `&appid=bc1fcafd8aff393e20555bdef17066e8`
    
// http://api.openweathermap.org/data/2.5/forecast?q=rasipuram&appid=bc1fcafd8aff393e20555bdef17066e8

const description = document.querySelector('.description');
const place = document.querySelector('.place');
const country = document.querySelector('.country');
const temperature = document.querySelector('.temp');
const search = document.querySelector('.search');
const searchLocation = document.querySelector('.search-location');
const image = document.querySelector('.img');

function getWeather(api, key) {
    search.addEventListener('submit', (e) => {
        e.preventDefault();
        const searchTerm = searchLocation.value;
        // WEATHER_API = ;
        fetch(api + searchTerm + key)
            .then(response => {
                return response.json();
            })

            .then(data => {
                return getData(data);

            });

        function getData(data) {
            let array = data;
            console.log(array);

            let des = data.weather[0].description;
            description.innerHTML = des;

            let temp = data.main.temp;
            temp = temp - 273.15;
            temp = Math.floor(temp);
            temperature.innerHTML = temp + "°c";

            let cntry = data.sys.country;
            country.innerHTML = cntry;


            let location = data.name;
            place.innerHTML = location;


            let img = data.weather[0].icon;
            image.innerHTML = `<img src='http://openweathermap.org/img/wn/${img}@4x.png' alt='img'>`;
        }

    });
}

getWeather(API, API_KEY);
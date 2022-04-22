// api key: da44a8d6e886088fec1a833225aa1e58

// var repoContainerEl = document.querySelector("#repos-container");
// var cityInputEl = document.querySelector("#city");

// var formSubmitHandler = function(event) {
//     //prevent page from refreshing
//     event.preventDefault();
// }



// var getCityRepos = function(city) {
//     // format the api url
//     var apiUrl = "https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}" + city;

//     // make a get request to url
//     fetch(apiUrl)
//     .then(function(response) {
//         // request was successful
//         if (response.ok) {
//             console.log(response);
//             response.json().then(function(data) {
//                 console.log(data);
//                 displayRepos(data, city);
//             });
//         }
//     })
// }

//Selectors
const submitBtn = document.querySelector("#submit-btn");
const cityEl = document.querySelector("#city");
const tempEl = document.querySelector("#temp");
const windEl = document.querySelector("#wind");
const humidityEl = document.querySelector("#humidity");
const uvIndexEl = document.querySelector("#uv-index");

//variables


function getWeather() {
    var city = cityEl.value.trim();
    var url1 = "https://api.openweathermap.org/data/2.5/weather?q="+ city +"&appid=da44a8d6e886088fec1a833225aa1e58"

    fetch(url1).then(function(res){
        return res.json();
    }).then(function(data){
        var url2 = "https://api.openweathermap.org/data/2.5/onecall?lat="+ data.coord.lat +"&lon="+ data.coord.lon +"&appid=da44a8d6e886088fec1a833225aa1e58&units=imperial"
        fetch(url2).then(function(res){
            return res.json();
        }).then(function(data){
            console.log(data);
            // everything else will go in here
            tempEl.textContent = "Temp: " + data.current.temp + "F"
            windEl.textContent = "Wind: " + data.current.wind_speed + "MPH"
            humidityEl.textContent = "Humidity: " + data.current.humidity + "%"
            uvIndexEl.textContent = "UV Index: " + data.current.uvi
        })
    })
}


//event listners
submitBtn.addEventListener("click", getWeather)
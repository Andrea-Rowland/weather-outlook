//Selectors
const submitBtn = document.querySelector("#submit-btn");
const cityEl = document.querySelector("#city");
const tempEl = document.querySelector("#temp");
const windEl = document.querySelector("#wind");
const humidityEl = document.querySelector("#humidity");
const uvIndexEl = document.querySelector("#uv-index");
const apiKey = "&appid=da44a8d6e886088fec1a833225aa1e58";

//variables


function getWeather() {
    var city = cityEl.value.trim();
    var url1 = "https://api.openweathermap.org/data/2.5/weather?q="+ city + apiKey

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

            var counter = 1
                      

            for (let i = 0; i < data.daily.length; i++) {
                
                var humidity = data.daily[i].humidity;
                var wind = data.daily[i].wind_speed;
                var temp = data.daily[i].temp.day;
                var date = moment(data.daily[i].dt_txt).format("l");
                var weatherIcon = data.daily[i].weather[0].icon;
                console.log(date, weatherIcon, temp, humidity, wind);    
            }
        })
    })
}


//event listners
submitBtn.addEventListener("click", getWeather)
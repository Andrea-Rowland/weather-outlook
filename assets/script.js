//Selectors
const submitBtn = document.querySelector("#submit-btn");
const cityEl = document.querySelector("#city");
const tempEl = document.querySelector("#temp");
const windEl = document.querySelector("#wind");
const humidityEl = document.querySelector("#humidity");
const uvIndexEl = document.querySelector("#uv-index");
const daysEl = document.querySelector('#five-day');
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
                      

            
            for (let i = 1; i < 6; i++) {
                
                var humidity = data.daily[i].humidity;
                var wind = data.daily[i].wind_speed;
                var temp = data.daily[i].temp.day;
                var date = moment().add(i, 'days').format("L");
                var weatherIcon = data.daily[i].weather[0].icon;
                console.log(date, weatherIcon, temp, humidity, wind);  
                

                var card = `<div class="card" style="width: 18rem;">
                <div class="card-body">
                  <h5 class="card-title">${date}</h5>
                  <img src="http://openweathermap.org/img/wn/${weatherIcon}@2x.png" alt="icons">
                  <p class="card-text">Temp: ${temp}</p>
                  <p class="card-text">Wind: ${wind} MPH</p>
                  <p class="card-text">Humidity: ${humidity} %</p>
                
                </div>
              </div>`;

                daysEl.insertAdjacentHTML('beforeend', card);

            }
        })
    })
}




//event listners
submitBtn.addEventListener("click", getWeather)
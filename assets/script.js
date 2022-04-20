var repoContainerEl = document.querySelector("#repos-container");
var cityInputEl = document.querySelector("#city");

var getCityRepos = function(city) {
    // format the api url
    var apiUrl = "https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}" + city;

    // make a get request to url
    fetch(apiUrl)
    .then(function(response) {
        // request was successful
        if (response.ok) {
            console.log(response);
            response.json().then(function(data) {
                console.log(data);
                displayRepos(data, city);
            });
        }
    })
}
var inputval = document.querySelector('#cityinput');
var btn = document.querySelector('#add');
var city = document.querySelector('#cityoutput');
var description = document.querySelector('#description');
var temp = document.querySelector('#temp');
var wind = document.querySelector('#wind');

var apik = "98d3db8614b3391dc8e10f863c580693";


function convertion(val) {
    return (val - 273).toFixed(2);
}


function fetchWeatherData() {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + inputval.value + '&appid=' + apik)
        .then(res => res.json())
        .then(data => {
            var nameval = data['name'];
            var descrip = data['weather'][0]['description'];
            var tempature = data['main']['temp'];
            var wndspd = data['wind']['speed'];

            city.innerHTML = `City: ${nameval}`;
            temp.innerHTML = `Temperature: ${convertion(tempature)} C`;
            description.innerHTML = `Conditions: ${descrip}`;
            wind.innerHTML = `Wind Speed: ${wndspd} km/h`;

        })
        .catch(err => alert('You entered the wrong city name'));
}


inputval.addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        fetchWeatherData();
    }
});


btn.addEventListener('click', function() {
    fetchWeatherData();
});
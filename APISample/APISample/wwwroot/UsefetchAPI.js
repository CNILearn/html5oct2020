document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("usefetch").onclick = newcallsample;
});

async function newcallsample() {
    var response = await fetch("WeatherForecast");
    var weather = await response.json();
    console.log(weather);
}
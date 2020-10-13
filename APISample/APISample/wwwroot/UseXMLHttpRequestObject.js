document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("usexmlhttp").onclick = oldcallsample;
});

function oldcallsample() {
    var request = new XMLHttpRequest();
    request.open("GET", "WeatherForecast");
    request.send();
    request.onreadystatechange = function () {
        if (request.readyState === 4) {
            var response = JSON.parse(request.responseText);
            console.log(response);
        }
    };
}
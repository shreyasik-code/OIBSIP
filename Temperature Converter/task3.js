function convertToFahrenheit() {
    var celsius = parseFloat(document.getElementById("temp").value);
    if (isNaN(celsius)) {
        document.getElementById("result").innerHTML = "Please enter a valid Celsius temperature!";
        return;
    }
    var fahrenheit = (celsius * 9 / 5) + 32;
    document.getElementById("result").innerHTML = fahrenheit.toFixed(2) + " °F";
}

function convertToCelsius() {
    var fahrenheit = parseFloat(document.getElementById("temp").value);
    if (isNaN(fahrenheit)) {
        document.getElementById("result").innerHTML = "Please enter a valid Fahrenheit temperature!";
        return;
    }
    var celsius = (fahrenheit - 32) * 5 / 9;
    document.getElementById("result").innerHTML = celsius.toFixed(2) + " °C";
}

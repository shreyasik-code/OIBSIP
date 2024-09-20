function convertToFahrenheit() {
    var celsius = parseFloat(document.getElementById("temp").value);
    var fahrenheit = (celsius * 9/5) + 32;
    document.getElementById("result").innerHTML = fahrenheit;
}

function convertToCelsius() {
    var fahrenheit = parseFloat(document.getElementById("temp").value);
    var celsius = (fahrenheit - 32) * 5/9;
    document.getElementById("result").innerHTML = celsius;
}

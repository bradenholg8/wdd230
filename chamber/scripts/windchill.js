const temperature = parseFloat(document.getElementById("temperature").textContent);
const windSpeed = parseFloat(document.getElementById("windspeed").textContent);

function calculateWindChill(temp, wind) {
    if (temp <= 50 && wind > 3.0) {
        let windChill = 35.74 + (0.6215 * temp) - (35.75 * Math.pow(wind, 0.16)) + (0.4275 * temp * Math.pow(wind, 0.16));
        return windChill.toFixed(2);
    } else {
        return "N/A";
    }
}

const windChillValue = calculateWindChill(temperature, windSpeed);
document.getElementById("windchill").textContent = windChillValue;

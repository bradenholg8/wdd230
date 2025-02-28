document.addEventListener("DOMContentLoaded", () => {
    const windChillElement = document.getElementById("windchill");

    if (windChillElement) {
        windChillElement.textContent = calculateWindChill(28, 5);
    } else {
        console.warn("Element with ID 'windchill' not found.");
    }
});

function calculateWindChill(temp, windSpeed) {
    if (temp <= 50 && windSpeed > 3) {
        let windChill =
            35.74 + 0.6215 * temp - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temp * Math.pow(windSpeed, 0.16);
        return `Wind Chill: ${windChill.toFixed(1)}°F`;
    } else {
        return "Wind Chill: N/A";
    }
}

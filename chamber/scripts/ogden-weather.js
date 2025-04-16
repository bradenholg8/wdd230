const API_KEY = '18ebc47538a53bfd9885e1ae88e91ebf';
const CITY = "Ogden";
const STATE = "UT";
const COUNTRY = "US";

async function fetchWeather() {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${CITY},${STATE},${COUNTRY}&appid=${API_KEY}&units=imperial`;

    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("Weather API request failed.");
        const data = await response.json();

        document.getElementById("current-temp").textContent = `${Math.round(data.main.temp)}°F`;
        document.getElementById("weather-description").textContent = data.weather[0].description;
        document.getElementById("wind-speed").textContent = `${data.wind.speed} MPH`;
        document.getElementById("wind-chill").textContent = calculateWindChill(data.main.temp, data.wind.speed);
    } catch (error) {
        console.error("Error fetching weather data:", error);
        document.getElementById("weather-container").innerHTML = "Error fetching weather data.";
    }
}

async function fetchForecast() {
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${CITY},${STATE},${COUNTRY}&appid=${API_KEY}&units=imperial`;

    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("Forecast API request failed.");
        const data = await response.json();

        const forecastContainer = document.getElementById("forecast");
        forecastContainer.innerHTML = "";

        for (let i = 0; i < data.list.length; i += 8) {
            const day = new Date(data.list[i].dt_txt).toLocaleDateString("en-US", { weekday: "long" });
            const temp = Math.round(data.list[i].main.temp);
            const condition = data.list[i].weather[0].description;

            const listItem = document.createElement("li");
            listItem.textContent = `${day}: ${temp}°F - ${condition}`;
            forecastContainer.appendChild(listItem);
        }
    } catch (error) {
        console.error("Error fetching forecast data:", error);
    }
}

function calculateWindChill(temp, windSpeed) {
    if (temp <= 50 && windSpeed > 3) {
        return `${Math.round(
            35.74 + (0.6215 * temp) - (35.75 * Math.pow(windSpeed, 0.16)) + (0.4275 * temp * Math.pow(windSpeed, 0.16))
        )}°F`;
    }
    return "N/A";
}

fetchWeather();
fetchForecast();

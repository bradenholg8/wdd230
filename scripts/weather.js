async function getUserWeather() {
    const weatherContainer = document.getElementById('location-and-weather');

    if (!navigator.geolocation) {
        weatherContainer.innerHTML = `Geolocation is not supported by your browser.`;
        return;
    }

    navigator.geolocation.getCurrentPosition(async (position) => {
        try {
            const apiKey = '18ebc47538a53bfd9885e1ae88e91ebf';
            const url = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=imperial&appid=${apiKey}`;
            
            const response = await fetch(url);
            if (!response.ok) throw new Error("API Error");

            const data = await response.json();
            weatherContainer.innerHTML = `${data.name}: ${Math.round(data.main.temp)}°F - ${data.weather[0].description}`;
        } catch (error) {
            weatherContainer.innerHTML = "Error fetching weather.";
        }
    });
}

getUserWeather();

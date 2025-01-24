async function getUserWeather() {
    const weatherContainer = document.getElementById('location-and-weather');
    const mapContainer = document.getElementById('map-container');

    if (!navigator.geolocation) {
        weatherContainer.innerHTML = `Geolocation is not supported by your browser.`;
        return;
    }

    navigator.geolocation.getCurrentPosition(async (position) => {
        const { latitude, longitude } = position.coords;

        try {
            const apiKey = '18ebc47538a53bfd9885e1ae88e91ebf';
            const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${apiKey}`;
            const response = await fetch(weatherUrl);

            if (!response.ok) {
                throw new Error(`API request failed with status ${response.status}`);
            }

            const data = await response.json();

            const location = data.name;
            const temperature = Math.round(data.main.temp);
            const weatherDescription = data.weather[0].description;
            const iconCode = data.weather[0].icon;

            weatherContainer.innerHTML = `
                <p>${location}</p>
                <p><img src="https://openweathermap.org/img/wn/${iconCode}.png" alt="${weatherDescription}" /> ${temperature}°F - ${weatherDescription}</p>
            `;
            
        } catch (error) {
            weatherContainer.innerHTML = `Unable to fetch weather data. Please try again later.`;
            console.error('Weather API error:', error);
        }
    }, (error) => {
        weatherContainer.innerHTML = `Unable to retrieve your location. Error: ${error.message}`;
        console.error('Geolocation error:', error);
    });
}

getUserWeather();

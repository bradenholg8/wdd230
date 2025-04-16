const apiKey = "18ebc47538a53bfd9885e1ae88e91ebf";
const lat = 20.51;
const lon = -86.95;

const tempEl = document.getElementById("current-temp");
const humidityEl = document.getElementById("humidity");
const descEl = document.getElementById("weather-description");
const iconEl = document.getElementById("weather-icon");
const forecastEl = document.getElementById("forecast-temp");
const alertEl = document.getElementById("weather-alert");
const alertText = document.getElementById("weather-max");
const closeAlert = document.getElementById("close-alert");

closeAlert.addEventListener("click", () => {
  alertEl.style.display = "none";
});

async function getCurrentWeather() {
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
  const response = await fetch(url);
  const data = await response.json();

  const temp = data.main.temp.toFixed(1);
  const humidity = data.main.humidity;
  const maxTemp = data.main.temp_max.toFixed(1);
  const weatherArray = data.weather;

  tempEl.textContent = `${temp} °C`;
  humidityEl.textContent = `${humidity}%`;
  alertText.textContent = `Today's high: ${maxTemp} °C`;

  iconEl.innerHTML = weatherArray.map(w => {
    return `<img src="https://openweathermap.org/img/wn/${w.icon}@2x.png" alt="${w.description}" title="${w.main}" />`;
  }).join("");

  descEl.textContent = weatherArray.map(w => `${w.main} - ${w.description}`).join(", ");
}

async function getTomorrowForecast() {
  const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
  const response = await fetch(url);
  const data = await response.json();

  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const target = `${tomorrow.toISOString().split("T")[0]} 15:00:00`;

  const forecast = data.list.find(item => item.dt_txt === target);
  if (forecast) {
    forecastEl.textContent = `${forecast.main.temp.toFixed(1)} °C`;
  } else {
    forecastEl.textContent = "N/A";
  }
}

getCurrentWeather();
getTomorrowForecast();

const apiKey = ""; // Open-Meteo doesn't require an API key

const locationElement = document.getElementById("location");
const temperatureElement = document.getElementById("temperature");
const descriptionElement = document.getElementById("description");
const weatherIconElement = document.getElementById("weather-icon");

const fetchWeatherData = async () => {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=40.7143&longitude=-74.006&hourly=temperature_2m`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        const currentWeather = data.hourly.time[0];
        const temperature = Math.round(currentWeather.temperature_2m);
        const description = currentWeather.weathercode.description;
        const weatherIcon = `https://open-meteo.com/en/forecast/weather-icons/${currentWeather.weathercode.id}.svg`;

        locationElement.textContent = `Location: ${data.hourly.city_name}`;
        temperatureElement.textContent = `${temperature}°C`;
        descriptionElement.textContent = description;
        weatherIconElement.src = weatherIcon;
    } catch (error) {
        console.error(error);
        alert("Error fetching weather data. Please try again later.");
    }
};

fetchWeatherData();

function displayDayAndTime(timestamp) {
  let date = new Date(timestamp);
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];

  return `${day}, ${hours}:${minutes}`;
}

function displayData(response) {
  let cityNameElement = document.querySelector("#city-name");
  cityNameElement.innerHTML = response.data.name;

  let dayAndTimeElement = document.querySelector("#day-and-time");
  dayAndTimeElement.innerHTML = displayDayAndTime(response.data.dt * 1000);

  let weatherDescriptionElement = document.querySelector(
    "#weather-description"
  );
  weatherDescriptionElement.innerHTML = response.data.weather[0].description;

  let weatherHumidityElement = document.querySelector(
    "#value-weather-humidity"
  );
  weatherHumidityElement.innerHTML = response.data.main.humidity;

  let weatherWindSpeedElement = document.querySelector(
    "#value-weather-wind-speed"
  );
  weatherWindSpeedElement.innerHTML = Math.round(response.data.wind.speed);

  let temperatureElement = document.querySelector("#value-temperature");
  temperatureElement.innerHTML = Math.round(response.data.main.temp);
}

let apiKey = `6e2e6ba4445c2a3f7c96186354d36ba3`;
let cityName = `New York`;
let unit = `metric`;
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&&units=${unit}`;
axios.get(apiUrl).then(displayData);

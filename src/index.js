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
  let dayAndTime = document.querySelector("#day-and-time");
  dayAndTime.innerHTML = displayDayAndTime(response.data.dt * 1000);
}

let apiKey = `6e2e6ba4445c2a3f7c96186354d36ba3`;
let cityName = `New York`;
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;
axios.get(apiUrl).then(displayData);

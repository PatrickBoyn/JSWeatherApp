const secrets = new Secrets();
const weatherClass = new Weather();

class UI {
  constructor() {
    this.container = document.querySelector('.container');
    this.location = document.getElementById('weather-location');
    this.description = document.getElementById('weather-description');
    this.temperatureString = document.getElementById('weather-string');
    this.details = document.getElementById('weather-details');
    this.icon = document.getElementById('weather-icon');
    this.humidity = document.getElementById('weather-humidity');
    this.feelsLike = document.getElementById('weather-feels-like');
    this.pressure = document.getElementById('weather-pressure');
    this.wind = document.getElementById('weather-wind');
  }

  paint(weather) {
    var today = new Date();
    var currentTime = today.getHours();
    this.location.textContent = weather.name;
    this.description.textContent = weather.weather[0].description;
    this.temperatureString.textContent = weather.main.temp;
    // TODO figure out what to do to fix the icon not showing.
    this.icon.setAttribute(
      'src',
      `http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`
    );
    this.humidity.textContent = `Humidity: ${weather.main.humidity}`;
    this.pressure.textContent = `Pressure: ${weather.main.pressure}`;
    this.wind.textContent = `Wind: ${weather.wind.speed}`;
    // My own addition to the
    if (currentTime >= 20) {
      this.container.style.backgroundColor = '#032d70';
    }
  }
}

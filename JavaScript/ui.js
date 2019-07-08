const secrets = new Secrets();
const weatherClass = new Weather();

class UI {
  constructor() {
    this.daytime = document.querySelectorAll('.daytime');
    this.modalTime = document.querySelector('.modal-daytime');
    this.location = document.getElementById('weather-location');
    this.description = document.getElementById('weather-description');
    this.temperatureString = document.getElementById('weather-string');
    this.details = document.getElementById('weather-details');
    this.icon = document.getElementById('weather-icon');
    this.humidity = document.getElementById('weather-humidity');
    this.feelsLike = document.getElementById('weather-feels-like');
    this.pressure = document.getElementById('weather-pressure');
    this.wind = document.getElementById('weather-wind');
    this.saveData = document.querySelector('#save-data');
  }

  paint(weather) {
    var today = new Date();
    var currentTime = today.getHours();
    this.location.textContent = weather.name;
    this.description.textContent = weather.weather[0].description;
    this.temperatureString.textContent = weather.main.temp;
    this.icon.setAttribute(
      'src',
      `http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`
    );
    this.humidity.textContent = `Humidity: ${weather.main.humidity}%`;
    this.pressure.textContent = `Pressure: ${weather.main.pressure} kPa`;
    this.wind.textContent = `Wind: ${weather.wind.speed}`;
    // My own addition to the
    this.daytime.forEach(element => {
      if (currentTime >= 20 || currentTime < 6) {
        element.style.backgroundColor = '#032d70';
      } else {
        element.style.backgroundColor = '#92acd6';
      }
    });
    // TODO figure out why this won't work.
    if (currentTime >= 20 || currentTime < 6) {
      this.modalTime.style.backgroundColor = '#032d70';
      this.saveData.style.borderColor = '#032d70';
    } else {
      this.modalTime.style.backgroundColor = '#92acd6';
    }
  }
}

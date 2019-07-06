const weatherClass = new Weather();

class UI {
  constructor() {
    this.location = document.getElementById('weather-location');
    this.description = document.getElementById('weather-description');
    this.temperatureString = document.getElementById('weather-string');
    this.details = document.getElementById('weather-details');
    this.icon = document.getElementById('weather-icon');
    this.humidity = document.getElementById('weather-humidity');
    this.feelsLike = document.getElementById('weather-feels-like');
    this.dewpoint = document.getElementById('weather-dewpoint');
    this.wind = document.getElementById('weather-wind');
  }

  paint(weather) {
    this.location.textContent = weather.name;
    this.description.textContent = weather.weather[0].description;
    this.temperatureString.textContent = weather.main.temp;
    // TODO figure out what to do to fix the icon not showing.
    this.icon.setAttribute('src', weather.weather.icon);
  }
}

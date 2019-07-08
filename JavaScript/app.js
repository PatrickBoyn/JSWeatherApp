const weather = new Weather('29609');
const ui = new UI();

document.addEventListener('DOMContentLoaded', getWeather);

function getWeather() {
  weather
    .getWeather()
    .then(results => {
      // So I don't go over the api limits.
      // ui.paint(results);
    })
    .catch(error => console.log(error));
}

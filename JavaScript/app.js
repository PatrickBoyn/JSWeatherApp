const weather = new Weather('29609');
const ui = new UI();

document.addEventListener('DOMContentLoaded', getWeather);

document.getElementById('save-data').addEventListener('click', e => {
  const zip = document.getElementById('zip').value;
  weather.changeLocation(zip);
});

function getWeather() {
  weather
    .getWeather()
    .then(results => {
      // So I don't go over the api limits.
      // ui.paint(results);
    })
    .catch(error => console.log(error));
}

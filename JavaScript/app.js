const weather = new Weather('29609');

function getWeather() {
  weather
    .getWeather()
    .then(results => {
      console.log(results);
    })
    .catch(error => console.log(error));
}

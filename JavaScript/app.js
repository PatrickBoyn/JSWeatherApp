const weather = new Weather('29609');

function getWeather() {
  weather
    .getWeather()
    .then(results => {
      console.log(results.main);
    })
    .catch(error => console.log(error));
}

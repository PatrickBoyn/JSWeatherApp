const secret = new Secrets();

class Weather {
  constructor(zip) {
    this.zip = zip;
    this.apiKey = secret.apiKey();
  }

  async getWeather() {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?zip=${
        this.zip
      },us&appid=${this.apiKey}&units=imperial`
    );

    const responseData = await response.json();
    console.log(`getWeather: ${responseData.main}`);
    return responseData;
  }
  async getIcon(icon) {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?zip=${
        this.zip
      },us&appid=${this.apiKey}&units=imperia&icon=${icon}`
    );
    const responseData = await response.json();
    console.log(`getIcon: ${responseData.weather[0].icon}`);
  }
  changeLocation(zipCode) {
    this.zip = zipCode;
  }
}

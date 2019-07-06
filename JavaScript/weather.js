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
      },us&appid=${this.apiKey}&units=fahrenheit`
    );
    console.log(response);
    const responseData = await response.json();

    return responseData;
  }

  changeLocation(zipCode) {
    this.zip = zipCode;
  }
}

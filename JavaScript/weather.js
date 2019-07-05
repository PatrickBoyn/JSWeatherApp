class Weather {
  constructor(zip) {
    // This is a free API key, you can get your own.
    this.apiKey = '49b3b5cf25012c4aec2789499c2f3cc9';
    this.zip = zip;
  }

  async getWeather() {
    const response = await fetch(
      `https://samples.openweathermap.org/data/2.5/weather?zip=${
        this.zip
      },us&appid=${this.apiKey}`
    );

    const responseData = await response.json();

    return responseData;
  }
}

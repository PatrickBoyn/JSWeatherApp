class Storage {
  constructor() {
    this.city;
    this.defaultCity = '29609';
  }

  getLocationData() {}

  setLocationData(city) {
    localStorage.setItem('city', city);
  }
}

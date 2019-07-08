class Storage {
  constructor() {
    this.city;
    this.defaultCity = '29609';
  }

  getLocationData() {
    if (localStorage.getItem('city') === null) {
      this.city = this.defaultCity;
    } else {
    }
  }

  setLocationData(city) {
    localStorage.setItem('city', city);
  }
}

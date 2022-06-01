// const Agency = require('../Agency');

class Tourist {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.tours = [];
  }

  buy(countryName, agency) {
    const wannaTour = agency.sell(countryName)
    if (wannaTour) {
      this.tours.push(wannaTour);
      return true;
    }
    return false;
  }
}

module.exports = Tourist;

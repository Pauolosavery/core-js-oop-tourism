class Agency {
  constructor(money, tours = []) {
    this.money = money;
    this.tours = tours;
  }

  availableToursCount() {
    return this.tours.length;
  }

  findTour(countryName) {
    // console.log(this.tours.find((obj) => obj.country === countryName));
    // console.log(this.tours.indexOf(this.tours.find((obj) => obj.country === countryName)));

    return this.tours.find((obj) => obj.country === countryName);
  }

  sell(countryName) {
    return this.findTour(countryName);
  }
}

module.exports = Agency;

// splice ( indexOf (), 1) == [массив элементов]
// shift - удаляет 1й элемент массива и возвращает его
// 1 найти страну-тур = вернуть его индекс
// 2 индекс существует = вырезать элемент из массива.

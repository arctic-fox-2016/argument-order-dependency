class Car{

  start_car(options) {
    if (options && options.hasOwnProperty("headlights"))
      this.headlights = options['headlights']
    else
      this.headlights = true

    if (options && options.hasOwnProperty("gear"))
      this.gear = options ['gear']
    else
      this.gear = 1
  }
}

var herbie = new Car

herbie.start_car()
console.log(herbie.headlights)

herbie.start_car({headlights: false})
console.log(herbie.headlights)

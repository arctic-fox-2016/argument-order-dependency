class Car {
  start_car(options) {
    if (options && options['headlights'] && this.hasOwnProperty('headlights'))
      this.headlights = options['headlights']
    else this.headlights = true

    if (options && options['gear'] && this.hasOwnProperty('gear'))
      this.gear = options['gear']
    else
      this.gear = 1
  }
}

var herbie = new Car

herbie.start_car()
console.log(`headlights value:${herbie.headlights}`)
console.log(`On gear:${herbie.gear}`)

herbie.start_car({

  headlights: false,
  gear: 2
})
console.log(`headlights value:${herbie.headlights}`)
console.log(`On gear:${herbie.gear}`)

"use strict"

class House {

// address, square_feet, num_bedrooms, num_baths, cost, down_payment, sold, has_tenants
  constructor(component) {
    this.address = component['address']
    this.square_feet = component['square_feet']
    this.num_bedrooms = component['num_bedrooms'] || 3
    this.num_baths = component['num_baths'] || 2
    this.cost = component['cost'] || 320000
    this.down_payment = component['down_payment'] || 0.20
    this.sold = component['sold'] || false
    this.short_sale = component['short_sale']
    this.has_tenants = component['has_tenants'] || false
  }

  obscure_address() {
    return this.address.replace(/.{10}$/g, '****')
  }

  buy(money, good_credit) {
    if (money >= this.down_payment && this.good_credit)
      this.sold = true
  }

  down_payment() {
    return this.cost * this.down_payment
  }

  to_s() {
    return `${this.obscure_address} : ${this.square_feet} sq. ft., ${this.num_bedrooms} bed, ${this.num_baths} bath. ${this.cost}`
  }
}




var component = []
component["address"] = "Permata Senayan, Jakarta"
component["square_feet"] = 50
component["num_bedrooms"] = 3
component["num_baths"]= 2


var myHouse = new House(
  { "address" : "Jl. Tentara Pelajar",
    "square_feet" : 50,
    "num_bedrooms" : 3,
    "num_baths" : 2,
    "cost" : 320000,
    "down_payment" : 0.20,
    "sold" : false

})

let testObject = {}
let testArray = []

let testHouse = new House(component)

console.log(testHouse.obscure_address());


class Car{

  start_car(options){
    if (options && options.hasOwnProperty('headlights'))
      this.headlights = options['headlights']
    else
      this.headlights = true

    if(options && options ['gear'])
      this.gear = options['gear']
     else
      this.gear = 1
    }
  }

  var herbie = new Car

  //when start the car, the headlights should be on by default
  herbie.start_car()
  console.log(herbie.headlights) //true

  herbie.start_car({headlights:false})
  console.log(herbie.headlights) //true

"use strict"

class House {

  constructor(options) {
    this._address = options.address
    this._square_feet = options.square_feet
    this._num_bedrooms = options.num_bedrooms || 3
    this._num_baths = options.num_baths || 2
    this._cost = options.cost || 320000
    this._down_payment = options.down_payment || 0.20
    this._sold = options.sold || false
    this._short_sale = options.short_sale
    this._has_tenants = options.has_tenants || false
  }

  obscure_address() {
    return this._address.replace(/.{10}$/g, '****')
  }

  buy(money, good_credit) {
    if (money >= this._down_payment && good_credit)
      this._sold = true
      return this._sold
  }

  down_payment() {
    return this._cost * this._down_payment
  }

  to_s() {
    return `${this._address} : ${this._square_feet} sq. ft., ${this._num_bedrooms} bed, ${this._num_baths} bath. ${this._cost}`
  }
}

let options1 = {
  address : "sudirman",
  square_feet : 150,
  num_bedrooms : 4,
  num_baths : 2,
  cost : 320000,
  down_payment : 0.20,
  sold : false,
  short_sale : false,
  has_tenants : false
}


let options2 = {
  address : "sudirman",
  square_feet : 150,
  num_baths : 2,
  cost : 200000,
  down_payment : 0.30,
  sold : false,
  short_sale : false,
  has_tenants : false
}

let rumah1 = new House(options1)
let rumah2 = new House(options2)

console.log(rumah1.down_payment())
console.log(rumah2.down_payment())
console.log(rumah2.to_s())

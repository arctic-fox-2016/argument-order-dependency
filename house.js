"use strict"

class House {

  constructor(components) {
    //address, square_feet, num_bedrooms, num_baths, cost, down_payment, sold, has_tenants

    this.address = components['address']
    this.square_feet = components['square_feet']
    this.num_bedrooms = components['num_bedrooms'] || 3
    this.num_baths = components['num_baths'] || 2
    this.cost = components['cost'] || 320000
    this.down_payment = components['down_payment'] || 0.20
    this.sold = components['sold'] || false
    this.short_sale = components['short_sale']
    this.has_tenants = components['has_tenants'] || false

  }

  obscure_address() {
    return this.address.replace(/.{10}$/g, '****')
  }

  buy(components) {
    this.money = components['money']
    this.good_credit = components['good_credit']
    if (this.money >= this.down_payment && this.good_credit)
      this.sold = true
  }

  down_paymen() {
    return this.cost * this.down_payment
  }

  to_s() {
      return `address lama: ${this.address} ,address baru: ${this.obscure_address()} : ${this.square_feet} sq. ft., ${this.num_bedrooms} bed, ${this.num_baths} bath. ${this.cost}`
  }
}

let ivan = new House({
  address:"123461231231231231231231231231231231",
  square_feet:23,
  num_bedrooms:3,
  num_baths:2,
  down_payment:50000,
  sold:false,
  cost:1500,
  short_sale:"SALEE!",
  has_tenants:false});

ivan.buy({
  money:50000,
  good_credit:20000
})

console.log(ivan.down_paymen());

console.log(ivan.to_s());

console.log(ivan);

console.log(ivan.hasOwnProperty("money"));

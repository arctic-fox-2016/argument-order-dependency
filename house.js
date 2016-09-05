"use strict"

class House {

  constructor(attributes) {
    this.owner = attributes['owner']
    this.address = attributes['address']
    this.square_feet = attributes['square_feet']
    this.num_bedrooms = attributes['num_bedrooms'] || 3
    this.num_baths = attributes['num_baths'] || 2
    this.cost = attributes['cost'] || 320000
    this.down_payment = attributes['down_payment'] || 0.20
    this.sold = attributes['sold'] || false
    this.short_sale = attributes['short_sale']
    this.has_tenants = attributes['has_tenants'] || false

  }

  obscure_address() {
    return this.address.replace(/.{10}$/g, '****')
  }

  buy(money, good_credit) {
    if (money >= down_payment && good_credit)
      this.sold = true
  }

  down_payment() {
    return this.cost * this.down_payment
  }

  to_s() {
    return ` Owner: ${this.owner},\n Address: ${this.obscure_address()},\n Area : ${this.square_feet} sq. ft.,\n Bedrooms: ${this.num_bedrooms} bed,\n Bathrooms: ${this.num_baths} bath.\n Cost: ${this.cost}$`
  }
}
let azis_house = new House({
  owner: "Sahabanaji",
  address: "Jl. Patal Senayan no. 12, Jakarta Selatan",
  square_feet: 10000,
  num_bedrooms: 7,
  num_baths: 3,
  cost: 500000,
  down_payment: 0.30,
  sold: false,
  short_sale: "yes",
  has_tenants: false
})
console.log(azis_house.to_s())

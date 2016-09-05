"use strict"

class House {

  constructor(rumah) {
    this.address = rumah['address'] //rumah.address
    this.square_feet = rumah.square_feet
    this.num_bedrooms = rumah.num_bedrooms || 3
    this.num_baths = rumah.num_baths || 2
    this.cost = rumah.cost || 320000
    this.down_payment = rumah.down_payment || 0.20
    if(rumah.hasOwnProperty("sold")) this.sold = rumah.sold; else this.sold = false
    this.short_sale = rumah.short_sale
    if(rumah.hasOwnProperty("has_tenants")) this.has_tenants = rumah.has_tenants; else this.has_tenants = false
  }

  obscure_address() {
    return this.address.replace(/.{10}$/g, '****')
  }

  buy(money, good_credit) {
    if (money >= down_payment && good_credit)
      this.sold = true
  }

  down_payment() {
    return cost * this.down_payment
  }

  to_s() {
    return `${this.obscure_address()} : ${this.square_feet} sq. ft., ${this.num_bedrooms} bed, ${this.num_baths} bath. ${this.cost}`
  }
}

let rumah = new House(
  {
    address : 'Ciledug',
    square_feet : 5,
    num_bedrooms : 2,
    num_baths : 3,
    cost : false,
    down_payment : 100000000,
    sold : false,
    has_tenants : false
  }
)

console.log(rumah)
// console.log(rumah.hasOwnProperty('address'))
// console.log(hasOwnProperty.call(rumah,'address'))
//
// console.log(rumah.sold)

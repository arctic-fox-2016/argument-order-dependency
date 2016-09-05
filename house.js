"use strict"
class House {


  constructor (components) {
    this.address = components ['address']
    this.square_feet = components ['square_feet']
    this.num_bedrooms = components ['num_bedrooms'] || 3
    this.num_baths = components ['num_baths'] || 2
    this.cost = components ['cost'] || 320000
    this.down_payment = components ['down_payment'] || 0.20
    this.sold = components['sold'] || false
    this.short_sale = components ['short_sale']
    this.has_tenants = components ['has_tenants'] || false

  }

  obscure_address() {
    return this.address.replace(/.{10}$/g, '****')
    // return `${this.address} : ${this.square_feet} sq. ft., ${this.num_bedrooms} bed, ${this.num_baths} bath. ${this.cost}`
  }

  buy(money, good_credit) {
    if (money >= down_payment || good_credit)
      this.sold = true
  }

  short_sale(sale, paid){
    if (sale >= paid)
    this.short_sale = false
  }

  down_payment() {
    let dp = this.cost * this.down_payment
     //return `Harga ${this._cost} , minimal DP = ${dp}`

  }


  to_s() {
    return `${this.address} : ${this.square_feet} sq. ft., ${this.num_bedrooms} bed, ${this.num_baths} bath. ${this.cost}`
  }
}

let rumah = new House({address:'menteng dalam',
                      square_feet:'1000',
                      short_sale:'true',
                      num_baths:'2'})

console.log(rumah.obscure_address());

console.log(rumah.to_s());

//console.log(rumah);

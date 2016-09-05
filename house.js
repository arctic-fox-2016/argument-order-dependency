"use strict"

class House {

  constructor(component) {
    this._address = component ['address']
    this._square_feet = component ['square_feet']
    this._num_bedrooms = component ['num_bedrooms'] || 3
    this._num_baths = component ['num_baths'] || 2
    this._cost = component ['cost'] || 320000
    this._down_payment = component ['down_payment'] || 0.20
    this._sold = component ['sold'] || false
    this._short_sale = component ['short_sale']
    this._has_tenants = component ['has_tenants'] || false
  }


  obscure_address() {
    let secret = this._address.replace(/.{10}/g, '**********')
    return `${secret} : ${this._square_feet} sq. ft, ${this._num_bedrooms} bed, ${this._num_baths} bath. $${this._cost}`
  }

  buy(money, good_credit) {
    if (money >= money * this._cost || good_credit * 12 > this._cost)
      {this._sold = true}
      else {this._sold = false}

      return `Total saldo = ${money}, kredit perbulan = ${good_credit}, apakah mampu membayar? ${this._sold}`
  }

  down_payment() {
    let dope = this._cost*this._down_payment
    return `Harga ${this._cost}, minimal dope = ${dope}`
  }

  to_s() {
    return `${this._address} : ${this._square_feet} sq. ft., ${this._num_bedrooms} bed, ${this._num_baths} bath. ${this._cost}`
  }
}
let tambun = new House({address: 'Metland_tambun', square_feet : 120, short_sale:true})
// console.log(tambun.hasOwnProperty('down_payment'))
console.log(tambun.down_payment())
console.log(tambun.to_s())
console.log(tambun.obscure_address())
console.log(tambun.buy(5000, 700))
console.log(tambun.buy(900, 2000))
console.log(tambun.buy(150000, 90000))
// console.log(tambun.buy(60000, 45000))

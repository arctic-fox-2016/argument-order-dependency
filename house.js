"use strict"

class House {

  constructor(property) {
    this._address = property['address']
    this._square_feet = property['square_feet']
    this._num_bedrooms = property['num_bedrooms'] || 3
    this._num_baths = property['num_baths'] || 2
    this._cost = property['cost'] || 320000
    this._down_payment = property['down_payment'] || 0.20
    this._sold = property['sold'] || false
    this._short_sale = property['short_sale']
    this._has_tenants = property['has_tenants'] || false
  }

  obscure_address() {
     let secret = this._address.replace(/.{10}/g, '**********')
     return `${secret} : ${this._square_feet} sq. ft., ${this._num_bedrooms} bed, ${this._num_baths} bath. ${this._cost}`

  }

  buy(money, good_credit) {
    if (money >= this._down_payment * this._cost || good_credit * 12 > this._cost)
      {this._sold = true}
      else {this._sold = false}

      return `Uang bapak = ${money}, kredit perbulan = ${good_credit}, apakah boleh beli? ${this._sold}`
  }

  down_payment() {
    let dp = this._cost * this._down_payment
    return `Harga ${this._cost} , minimal DP = ${dp}`

  }

  to_s() {
    return `${this._address} : ${this._square_feet} sq. ft., ${this._num_bedrooms} bed, ${this._num_baths} bath. ${this._cost}`
  }
}

let cakung = new House({address:'kebayoran_lama', square_feet:160, short_sale:true })

console.log(cakung.down_payment())
console.log(cakung.to_s())
console.log(cakung.obscure_address())
console.log(cakung.buy(200000, 50000))
console.log(cakung.buy(0, 32000))
console.log(cakung.buy(50000, 2000))
// console.log(cakung.hasOwnProperty('short_sale'))
// cakung.cariAlamat('kebayoran_baru')
// console.log(cakung.address())

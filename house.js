"use strict"

class House {

  constructor(address, num_bedrooms, cost) {
    this.address = address
    this.num_bedrooms = num_bedrooms || 3
    this.cost = cost || 320000
  }

  set_square_feet(square_feet) {
    this.square_feet = square_feet
  }

  set_num_baths(num_baths) {
    this.num_baths = num_baths || 2
  }

  set_down_payment(down_payment) {
    this.down_payment = down_payment || 0.20
  }

  set_sold(sold) {
    this.sold = sold || false
  }

  set_has_tenants(has_tenants) {
    this.has_tenants = has_tenants || false
  }
  set_short_sale(short_sale) {
    this.short_sale = short_sale
  }
  get_square_feet() {
    return this.square_feet
  }

  get_num_baths() {
    return this.num_baths
  }


  get_down_payment() {
    return this.down_payment()
  }

  get_sold() {
    return this.sold
  }

  get_has_tenants() {
    return this.has_tenants
  }
  get_short_sale() {
    return this.short_sale
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
    return `${this.obscure_address()} : ${this.square_feet} sq. ft., ${this.num_bedrooms} bed, ${this.num_baths} bath. ${this.cost}$`
  }
}
let azis_house = new House("Jl. Patal Senayan no. 12, Jakarta Selatan", 7, 500000)
azis_house.set_sold(false)
azis_house.set_num_baths(3)
azis_house.set_has_tenants(false)
azis_house.set_square_feet(false)
console.log(azis_house.to_s())

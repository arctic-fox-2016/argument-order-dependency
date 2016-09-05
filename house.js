"use strict"

class House {

  constructor(property) {
    this.address = property["address"];
    this.square_feet = property["square_feet"];
    this.num_bedrooms = property["num_bedrooms"] || 3;
    this.num_baths = property["num_baths"] || 2;
    this.cost = property["cost"] || 320000;
    this.down_payment = property["down_payment"] || 0.20;
    this.sold = property["sold"] || false;
    this.short_sale = property["short_sale"];
    this.has_tenants = property["has_tenants"] || false;
  }

  obscure_address() {
    this.address.replace(/.{10}$/g, '****')
  }

  buy(money, good_credit) {
    if (money >= down_payment && good_credit)
      this.sold = true
  }

  down_payment() {
    return cost * this.down_payment
  }

  to_s() {
    return `${obscure_address} : ${square_feet} sq. ft., ${num_bedrooms} bed, ${num_baths} bath. ${cost}`
  }
}

let house_prop = [];
house_prop["address"] = "Jakarta";
house_prop["square_feet"] = 200;
house_prop["num_bedrooms"] = 4;
house_prop["num_baths"] = 4;
house_prop["cost"] = 1000000000;
house_prop["down_payment"] = 300000000;
house_prop["sold"] = true;
house_prop["short_sale"] = true;
house_prop["has_tenants"] = true;

let minimalis = new House(house_prop);
console.log(minimalis.down_payment)

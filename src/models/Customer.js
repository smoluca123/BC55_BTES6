import Person from './Person.js';

export default class Customer extends Person {
  constructor(id, name, email, address, company, valuation, review) {
    super(id, name, email, address);
    this.company = company;
    this.valuation = +valuation;
    this.review = review;
  }
}

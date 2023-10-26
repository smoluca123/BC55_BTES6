import Person from './Person.js';

export default class Employee extends Person {
  constructor(id, name, email, address, workingDays, salary) {
    super(id, name, email, address);
    this.workingDays = +workingDays;
    this.salary = +salary;
  }
}

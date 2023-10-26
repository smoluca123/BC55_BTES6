import Person from './Person.js';

export default class Student extends Person {
  constructor(id, name, email, address, diemToan, diemLy, diemHoa) {
    super(id, name, email, address);
    this.diemToan = +diemToan;
    this.diemLy = +diemLy;
    this.diemHoa = +diemHoa;
  }
}

import { $a, $all } from './shortEle.js';
import Student from '../models/Student.js';
import Employee from '../models/Employee.js';
import Customer from '../models/Customer.js';
import ListPerson from '../models/ListPerson.js';
import { handleChangeInput } from './handleChangeInput.js';

$a('#typePersonModal').addEventListener('change', handleChangeInput);

import { $a, $all } from './shortEle.js';
const handleChangeInput = () => {
  const selectEle = $a('#typePersonModal');
  const fieldStudent = [
    { field: 'diemToan', label: 'Điểm toán', icon: 'fa fa-star' },
    { field: 'diemLy', label: 'Điểm lý', icon: 'fa fa-star' },
    { field: 'diemHoa', label: 'Điểm hóa', icon: 'fa fa-star' },
  ];
  const fieldEmployee = [
    { field: 'workingDays', label: 'Số ngày làm việc', icon: 'fa fa-building' },
    { field: 'salaryDay', label: 'Lương theo ngày', icon: 'fa fa-usd' },
  ];
  const fieldCustomer = [
    { field: 'company', label: 'Tên công ty', icon: 'fa fa-building' },
    { field: 'valuation', label: 'Lương theo ngày', icon: 'fa fa-usd' },
    { field: 'review', label: 'Đánh giá', icon: 'fa fa-star' },
  ];
  let content = '';
  switch (selectEle.value) {
    case 'Student':
      content = fieldStudent.reduce((prev, item) => {
        return prev + customModalPerson(item);
      }, '');
      $a('#modalPerson').innerHTML = content;
      break;
    case 'Employee':
      content = fieldEmployee.reduce((prev, item) => {
        return prev + customModalPerson(item);
      }, '');
      $a('#modalPerson').innerHTML = content;

      break;
    case 'Customer':
      content = fieldCustomer.reduce((prev, item) => {
        return prev + customModalPerson(item);
      }, '');
      $a('#modalPerson').innerHTML = content;

      break;
    default:
      $a('#modalPerson').innerHTML = '';
      break;
  }
};

export { handleChangeInput };

const customModalPerson = ({ icon, field, label }) => {
  return `
        <div class="form-group">
            <div class="input-group">
                <div class="input-group-prepend">
                    <span class="input-group-text"><i class="${icon}"></i></span>
                </div>
                <input type="${field}" name="${field}" id="${field}" class="form-control input-sm"
                    placeholder="${label}">
            </div>
            <span class="sp-thongbao" id="tb${
              field.charAt(0).toUpperCase() + field.slice(1)
            }"></span>
        </div>
    `;
};

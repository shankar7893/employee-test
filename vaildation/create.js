const validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateLogin(data) {
  let errors = {};

  data.employee_id = !isEmpty(data.employee_id) ? data.employee_id : "";
  data.company_id = !isEmpty(data.company_id) ? data.company_id : "";
  data.department_id = !isEmpty(data.department_id) ? data.department_id : "";
  data.firstname = !isEmpty(data.firstname) ? data.firstname : "";
  data.lastname = !isEmpty(data.lastname) ? data.lastname : "";
  data.birthdate = !isEmpty(data.birthdate) ? data.birthdate : "";
  data.hireddate = !isEmpty(data.hireddate) ? data.hireddate : "";
  data.age = !isEmpty(data.age) ? data.age : "";
  data.designation = !isEmpty(data.designation) ? data.designation : "";
  data.address = !isEmpty(data.address) ? data.address : "";
  data.workinglocation = !isEmpty(data.workinglocation)
    ? data.workinglocation
    : "";
  data.mobileno = !isEmpty(data.mobileno) ? data.mobileno : "";
  data.username = !isEmpty(data.username) ? data.username : "";
  data.password = !isEmpty(data.password) ? data.password : "";

  if (validator.isEmpty(data.employee_id)) {
    errors.employee_id = "employee id should not be empty";
  }

  if (validator.isEmpty(data.company_id)) {
    errors.company_id = "company id should not be empty";
  }
  if (validator.isEmpty(data.department_id)) {
    errors.department_id = "department id should not be empty";
  }

  if (validator.isEmpty(data.firstname)) {
    errors.firstname = "first name should not be empty";
  }
  if (validator.isEmpty(data.lastname)) {
    errors.lastname = "last name should not be empty";
  }

  if (validator.isEmpty(data.birthdate)) {
    errors.birthdate = "birth date should not be empty";
  }
  if (validator.isEmpty(data.hireddate)) {
    errors.hireddate = "hired date should not be empty";
  }

  if (validator.isEmpty(data.age)) {
    errors.age = "age should not be empty";
  }
  if (validator.isEmpty(data.designation)) {
    errors.designation = "desugnation should not be empty";
  }

  if (validator.isEmpty(data.address)) {
    errors.address = "address should not be empty";
  }
  if (validator.isEmpty(data.workinglocation)) {
    errors.workinglocation = "working location should not be empty";
  }

  if (validator.isEmpty(data.mobileno)) {
    errors.mobileno = "mobile number should not be empty";
  }
  // if (validator.isLength(data.mobileno, { min: 10, max: 13 })) {
  //   errors.mobileno = "mobile number should not exceed 13 digits including +91";
  // }
  if (validator.isEmpty(data.username)) {
    errors.username = "username should not be empty";
  }

  if (validator.isEmpty(data.password)) {
    errors.password = "password should not be empty";
  }
  return {
    errors,
    isvalid: isEmpty(errors)
  };
};

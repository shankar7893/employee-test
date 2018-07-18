const validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateLogin(data) {
  let errors = {};
  data.username = !isEmpty(data.username) ? data.username : "";
  data.password = !isEmpty(data.password) ? data.password : "";

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

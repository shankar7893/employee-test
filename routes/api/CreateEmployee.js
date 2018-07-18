const express = require("express");
const router = express.Router();
const create = require("../../vaildation/create");
const sqlconnection = require("../../Sql Connection/sqlconnection");

router.get("/", (req, res) => {
  res.render("createEmployee.html");
});

router.post("/", (req, res) => {
  const { errors, isvalid } = create(req.body);
  if (!isvalid) {
    return res.json(errors);
  }
  sqlconnection.sqlconnection(
    `insert into employee_details (employee_id, company_id, department_id, firstname, lastname, birthdate, hireddate, age, 
      designation, address, workinglocation, mobileno, username, password) 
      values ('${req.body.employee_id}','${req.body.company_id}','${
      req.body.department_id
    }','${req.body.firstname}','${req.body.lastname}','${
      req.body.birthdate
    }','${req.body.hireddate}','${req.body.age}','${req.body.designation}','${
      req.body.address
    }','${req.body.workinglocation}','${req.body.mobileno}','${
      req.body.username
    }','${req.body.password}')`,
    (errors, rows) => {
      res.send("employee added");
    }
  );
});

module.exports = router;

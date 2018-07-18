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
    res.json(errors);
  }
  sqlconnection.sqlconnection(
    `insert into employee_details (employee_id, company_id, department_id, firstname, lastname, birthdate, hireddate, age, designation, address, workinglocation, mobileno, username, password,record_status, created_at, updated_at) values (${
      req.body.employee_id
    },${req.body.company_id},${req.body.department_id},${req.body.firstname},${
      req.body.lastname
    },${req.body.birthdate},${req.body.hireddate},${req.body.age},${
      req.body.designation
    },${req.body.address},${req.body.workinglocation},${req.body.mobileno},${
      req.body.username
    },${req.body.password},1,CURRENT_TIMESTAMP,CURRENT_TIMESTAMP)`,
    (errors, rows) => {
      console.log(errors);
      console.log(rows);
      res.send(errors);
    }
  );
});

module.exports = router;

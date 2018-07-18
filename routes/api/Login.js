const express = require("express");
const router = express.Router();
const sqlconnection = require("../../Sql Connection/sqlconnection");
const login = require("../../vaildation/login");

router.post("/", (req, res) => {
  const { errors, isvalid } = login(req.body);
  if (!isvalid) {
    return res.json(errors);
  } else {
    let user = { username: "", password: "" };

    sqlconnection.sqlconnection(
      `SELECT * from employee_details where username="${
        req.body.username
      }" and password="${req.body.password}"`,
      (err, rows) => {
        if (rows.length == 0) {
          errors.details = "invalid details";
          console.log("shankar");
          res.json(errors);
        } else {
          user.username = rows[0].username;
          user.password = rows[0].password;
          console.log("shankar");
          res.json(rows);
        }
      }
    );
  }
});

module.exports = router;

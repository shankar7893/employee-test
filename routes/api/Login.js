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
<<<<<<< HEAD
          errors.details = "invalid details";
          res.json(errors);
=======
          console.log("error");
          res.json({ error: "invaild details" });
>>>>>>> 207a1daf9ee80684c08c75cf83471e0714e85470
        } else {
          user.username = rows[0].username;
          user.password = rows[0].password;
          res.json(rows);
        }
      }
    );
  }
});

module.exports = router;

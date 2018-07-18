const express = require("express");
const router = express.Router();
const Joi = require("joi");
const sqlconnection = require("../../Sql Connection/sqlconnection");

router.post("/", (req, res) => {
  const loginschema = {
    username: Joi.string()
      .min(3)
      .required(),
    password: Joi.string()
      .min(3)
      .required()
  };
  const result = Joi.validate(req.body, loginschema);
  if (result.error) {
    let error = result.error.details[0].message;
    res.send({ error });
  } else {
    let user = { username: "", password: "" };

    sqlconnection.sqlconnection(
      `SELECT * from employee_details where username="${
        req.body.username
      }" and password="${req.body.password}"`,
      (err, rows) => {
        if (rows.length == 0) {
          console.log("error");
          res.json({ error: "invaild details" });
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

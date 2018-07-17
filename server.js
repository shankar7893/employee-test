//imports
const express = require("express");
const app = express();
const Joi = require("joi");
//const bodyParser = require("body-parser");

const sqlconnection = require("./Sql Connection/sqlconnection");

//middleware

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("static"));

app.get("/", (req, res) => {
  res.render("index.html");
});

app.post("/", (req, res) => {
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
    res.send(error);
  } else {
    let user = { username: "", password: "" };

    sqlconnection.sqlconnection(
      `SELECT * from employee_details where username="${
        req.body.username
      }" and password="${req.body.password}"`,
      (err, rows) => {
        if (rows.length == 0) {
          console.log("error");
          res.send({ error: "error" });
        } else {
          user.username = rows[0].username;
          user.password = rows[0].password;
          res.send(rows);
        }
      }
    );
  }
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}`));

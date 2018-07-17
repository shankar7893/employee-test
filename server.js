//imports
const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const Joi = require("joi");
const sqlconnection = require("./Sql Connection/sqlconnection");

//middleware

app.use(express.json());
app.use(express.urlencoded());
//app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("static"));

app.get("/", (req, res) => {
  console.log("hii");
  res.sendFile(path.join("index.html"));
});

app.post("/", (req, res) => {
  const schema = {
    username: Joi.string()
      .min(3)
      .required(),
    password: Joi.string()
      .min(3)
      .required()
  };
  const result = Joi.validate(req.body, schema);
  let user = {};
  if (result.error) {
    res.setHeader("content-type", "text/plain");
    res.send(result.error.details[0].message);
  } else {
    const name = req.body.username;
    sqlconnection.sqlconnection(
      `SELECT * from employee_details where username="${name}"`,
      (err, rows) => {
        //user = rows;
        user = {
          username: rows[0].username
        };
        console.log(user);
      }
    );
    res.setHeader("content-type", "json/text");
    res.send(user);
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));

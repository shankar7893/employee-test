const express = require("express");
const app = express();

module.exports.sqlconnection = (query, callback) => {
  var sql = require("mysql");
  var connection = sql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "employee_database"
  });
  connection.connect(); //SELECT * from employee_details
  connection.query(query, function(err, rows, fields) {
    // if (err) throw err;
    callback(err, rows);
  });

  connection.end();
};

//using process

//const sqlconnection = require("./Sql Connection/sqlconnection"); import

// sqlconnection.sqlconnection("SELECT * from employee_details", (err, rows) => {
//     console.log(rows[0].lastname);
//   });

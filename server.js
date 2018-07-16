//imports
const express = require("express");
const app = express();

//middleware
app.use(express.json());

var sql = require("mysql");
var connection = sql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "employee_database"
});
connection.connect();
connection.query("SELECT * from employee_details", function(err, rows, fields) {
  if (err) throw err;

  console.log("The solution is: ", rows[0].lastname);
});

connection.end();

app.get("/", (req, res) => {
  console.log(req);
  res.send("hello world");
});

app.post("/api", (req, res) => {
  console.log(req.body.email);
  const email = req.body.email;
  res.send(req.body.email);
});

app.listen(3000, () => console.log("Listening on port 3000..."));

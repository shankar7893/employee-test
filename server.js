//imports
const express = require("express");
const app = express();
const cors = require("cors");
const Home = require("./routes/api/Home");
const login = require("./routes/api/Login");
const createEmployee = require("./routes/api/CreateEmployee");

//middleware
app.use(cors());
app.use(express.static(__dirname + "static"));
app.set("views", __dirname + "/static");
app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("static"));

//Routes
app.use("/", Home);
app.use("/", login);
app.use("/create", createEmployee);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}`));

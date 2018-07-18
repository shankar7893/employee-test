const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("createEmployee.html");
});

router.post("/", (req, res) => {
  res.send(req.body);
});

module.exports = router;

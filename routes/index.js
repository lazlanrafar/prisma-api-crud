var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/products", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/products/:id", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.post("/products", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.patch("/products/:id", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.delete("/products/:id", function (req, res, next) {
  res.render("index", { title: "Express" });
});

module.exports = router;

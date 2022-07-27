var express = require("express");
var router = express.Router();
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

/* GET home page. */
router.get("/products", async (req, res, next) => {
  try {
    const products = await prisma.product.findMany({
      include: {
        category: true,
      },
    });
    const categories = await prisma.category.findMany({
      include: {
        products: true,
      },
    });
    res.json({ products, categories });
  } catch (error) {
    next(error);
  }
});

router.get("/products/:id", async (req, res, next) => {
  res.render("index", { title: "Express" });
});

router.post("/products", async (req, res, next) => {
  res.render("index", { title: "Express" });
});

router.patch("/products/:id", async (req, res, next) => {
  res.render("index", { title: "Express" });
});

router.delete("/products/:id", async (req, res, next) => {
  res.render("index", { title: "Express" });
});

module.exports = router;

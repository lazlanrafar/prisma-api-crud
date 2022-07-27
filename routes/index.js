var express = require("express");
var router = express.Router();
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

/* GET home page. */
router.get("/product", async (req, res, next) => {
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

router.get("/product/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const product = await prisma.product.findUnique({
      where: {
        id: Number(id),
      },
      include: {
        category: true,
      },
    });
    res.json(product);
  } catch (error) {
    next(error);
  }
});

router.post("/product", async (req, res, next) => {
  try {
    const product = await prisma.product.create({
      data: req.body,
    });
    res.json(product);
  } catch (error) {
    next(error);
  }
});

router.patch("/product/:id", async (req, res, next) => {
  res.render("index", { title: "Express" });
});

router.delete("/product/:id", async (req, res, next) => {
  res.render("index", { title: "Express" });
});

module.exports = router;

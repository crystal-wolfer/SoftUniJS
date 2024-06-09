const router = require("express").Router();
const electronicsManager = require("../managers/electronicsManager.js");
const { isAuth } = require("../middlewares/authMiddleware.js")


router.get("/", async (req, res) => {
  res.render("home");
});

// TODO: FIX
router.get("/search", isAuth, async (req, res) => {
  const products = await electronicsManager.getAll();
  let empty = false;
  if (products.length === 0) {
    empty = true;
  }
  res.render("search", {products, empty});
});

router.post("/search", isAuth, async (req, res) => {
  const { name, type } = req.body;
  const electronics = await electronicsManager.search(name, type); 
  let empty = false;
  if (electronics.length === 0) {
    empty = true;
  }

  res.render("search", { electronics, name, type, empty });
});

// setting up every wrong endpoint to redirect to a 404 endpoint
router.get("/404", (req, res) => {
  res.render("404");
});

module.exports = router;

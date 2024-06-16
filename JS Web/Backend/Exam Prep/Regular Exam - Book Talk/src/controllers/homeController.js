const router = require("express").Router();


router.get("/", async (req, res) => {
  res.render("home");
});



// setting up every wrong endpoint to redirect to a 404 endpoint
router.get("/404", (req, res) => {
  res.render("404");
});

module.exports = router;

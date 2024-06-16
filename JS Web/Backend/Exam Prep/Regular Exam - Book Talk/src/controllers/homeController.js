const router = require("express").Router();
const bookManager = require("../managers/bookManager.js")
const { isAuth } = require("../middlewares/authMiddleware.js");


router.get("/", async (req, res) => {
  res.render("home");
});

router.get("/my-profile", isAuth, async (req, res) => {
  const email = req.user.email
  const id = req.user._id;
  console.log(id);
  const wishList = await bookManager.wishList(id)
  console.log(wishList);
  res.render("profile", {email, wishList});
});


// setting up every wrong endpoint to redirect to a 404 endpoint
router.get("/404", (req, res) => {
  res.render("404");
});

module.exports = router;

const router = require("express").Router();
const { getErrorMessages } = require("../lib/utils.js");
const userManager = require("../managers/userManager.js");
const { isLoggedIn } = require('../middlewares/authMiddleware.js');



// REGISTER
router.get("/register", isLoggedIn, (req, res) => {
  res.render("./user/register");
});

router.post("/register", async (req, res) => {
  const { username, email, password, repeatPassword } = req.body;

  try {
    await userManager.register({ username, email, password, repeatPassword });
    res.redirect("/");

  } catch (error) {
    const err = getErrorMessages(error);
    res.status(400).render("./user/register", { errorMessages: err, username, email });
  }
});

// LOGIN
router.get("/login", isLoggedIn, (req, res) => {
  res.render("./user/login");
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const token = await userManager.login(email, password);

    // setting up the cookie
    res.cookie("userAuth", token, { httpOnly: true });
    res.redirect("/");
  } catch (error) {
    const err = getErrorMessages(error);
    res.status(400).render("./user/login", { errorMessages: err, email });
  }
});

// LOGOUT
router.get("/logout", (req, res) => {
  if (!req.user){
    return res.redirect('/404');
  }
  res.clearCookie("userAuth");
  return res.redirect("/");
});

module.exports = router;

const router = require("express").Router();
const { getErrorMessages } = require("../lib/utils.js");
const userManager = require("../managers/userManager.js");

// REGISTER
router.get("/register", (req, res) => {
  res.render("./user/register");
});

router.post("/register", async (req, res) => {
  const { email, password, repeatPassword } = req.body;

  try {
    await userManager.register({ email, password, repeatPassword });
    res.redirect("/users/login");
  } catch (error) {
    const err = getErrorMessages(error);
    res.status(400).render("./user/register", { errorMessages: err });
  }
});

// LOGIN
router.get("/login", (req, res) => {
  res.render("./user/login");
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const token = await userManager.login(email, password);

    await userManager.login(email, password);
    // setting up the cookie
    res.cookie("userAuth", token, { httpOnly: true });
    res.redirect("/");
  } catch (error) {
    const err = getErrorMessages(error);
    res.status(400).render("./user/login", { errorMessages: err });
  }
});

// LOGOUT
router.get("/logout", (req, res) => {
  res.clearCookie("userAuth");
  return res.redirect("/");
});

module.exports = router;

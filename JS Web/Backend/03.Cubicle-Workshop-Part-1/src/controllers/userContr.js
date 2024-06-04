const router = require("express").Router();
const { getErrorMessages } = require("../middlewares/utils.js");
const userService = require("../services/userService.js");

//REGISTER OPERATIONS
router.get("/register", (req, res) => {
  res.render("./userAuth/register");
});

router.post("/register", async (req, res) => {
  const { username, password, repeatPassword } = req.body;

  try {
    await userService.register({ username, password, repeatPassword });
    res.redirect("/user/login");
  } catch (error) {
    const err = getErrorMessages(error);
    res.status(400).render("./userAuth/register", { errorMessages: err });
  }
});

//LOGIN OPERATIONS
router.get("/login", (req, res) => {
  res.render("./userAuth/login");
});

router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;
    const token = await userService.login(username, password);

    // setting up the cookie
    res.cookie("userAuth", token, { httpOnly: true });
    res.redirect("/");
  } catch (error) {
    const err = getErrorMessages(error);
    res.status(400).render("./userAuth/login", { errorMessages: err });
  }
});

// LOGOUT OPERATION
router.get("/logout", async (req, res) => {
  res.clearCookie("userAuth");
  return res.redirect("/");
});

module.exports = router;

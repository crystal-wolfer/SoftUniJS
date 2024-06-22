const router = require("express").Router();
const creatureManager = require("../managers/creatureManager.js");
const userManager = require("../managers/userManager.js");

router.get("/", async (req, res) => {
  res.render("home");
});

// My profile page
router.get("/my-profile", async (req, res) => {
  const id = req.user._id;
  // Get the names of the Creator
  const getOwner = await userManager.getOwnerName(id);
  const createdCreatures = await creatureManager.createdCreatures(id);
  console.log(createdCreatures);

  res.render("profile", {
    createdCreatures,
    id,
  });
});

// setting up every wrong endpoint to redirect to a 404 endpoint
router.get("/404", (req, res) => {
  res.render("404");
});

module.exports = router;

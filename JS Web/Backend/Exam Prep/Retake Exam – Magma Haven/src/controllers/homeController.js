const router = require("express").Router();
const volcanoManager = require("../managers/volcanoManager.js");
const { getErrorMessages, generateOptions } = require('../lib/utils.js');


router.get("/", async (req, res) => {
  res.render("home");
});

// TODO: FIX
router.get("/search", async (req, res) => {
  const options = generateOptions();
  res.render("search", {options});
});

router.post("/search", async (req, res) => {
  const { name, typeVolcano } = req.body;
  const volcanos = await volcanoManager.search(name, typeVolcano);

  let options;
  if (!typeVolcano) {
    options = generateOptions();
  } else {
    options = generateOptions(typeVolcano);
  }

  res.render("search", { volcanos, name, typeVolcano, options });
});

// setting up every wrong endpoint to redirect to a 404 endpoint
router.get("/404", (req, res) => {
  res.render("404");
});

module.exports = router;

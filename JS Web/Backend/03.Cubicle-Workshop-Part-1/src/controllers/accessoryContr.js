const router = require("express").Router();
const { getErrorMessages, getFields } = require("../middlewares/utils.js");
const accessoryService = require("../services/accessoryService.js");

router.get("/create", (req, res) => {
  res.render("./cubeAccessory/create");
});

router.post("/create", async (req, res) => {
  const { name, description, imageUrl } = req.body;

  try {
    await accessoryService.createAcc({ name, description, imageUrl });
    res.redirect("/");
  } catch (error) {
    const err = getErrorMessages(error);
    const errFields = getFields(err);
    const isEmpty = Object.keys(errFields).length === 0;
    console.log(imageUrl);


    // Check where the error came from and render the rest of the fields filled in
    if (!isEmpty) {
      res.status(400).render("./cube/create", {
        errorMessages: err,
        errorN: errFields.errorN,
        errorD: errFields.errorD,
        errorI: errFields.errorI,
        name,
        description,
        imageUrl,
      });
    }
  }
});

module.exports = router;

const router = require("express").Router();
const cubeService = require("../services/cubeService.js");
const accessoryService = require("../services/accessoryService.js");
const { generateDiffLevel, getFields, getErrorMessages } = require("../middlewares/utils.js");
const { isAuth } = require("../middlewares/authMiddleware.js");

// GET ALL CUBES
router.get("/create", isAuth, async (req, res) => {
  await cubeService.getAllCubes();
  res.render("cube/create");
});

// CREATE CUBE
router.post("/create", isAuth, async (req, res) => {
  const { name, description, imageUrl, difficultyLevel } = req.body;
  try {
    await cubeService.createCube({
      name,
      description,
      imageUrl,
      difficultyLevel: Number(difficultyLevel),
      owner: req.user._id,
    }); //add the owner id from the req.user cookie
    res.redirect("/");
  } catch (error) {
    const err = getErrorMessages(error);
    const errFields = getFields(err);
    const isEmpty = Object.keys(errFields).length === 0 

    // Check where the error came from and render the rest of the fields filled in
    if (!isEmpty) {
    res.status(400).render("./cube/create", { 
      errorMessages: err, 
      errorN: errFields.errorN,
      errorD: errFields.errorD,
      errorI: errFields.errorI,
      name, description, imageUrl
      });
    }
  }
});

// GET 1 CUBE
router.get("/details/:cubeId", async (req, res) => {
  const { cubeId } = req.params;
  //mongoose works with mongoose documents not standard objects. To make it work with handlebars we need to use the lean() method from mongoose which will return a pure object
  const cube = await cubeService.getCubeWithAcc(cubeId).lean();

  //check if there is a valid ID if not redirecting to 404
  if (!cube) {
    res.redirect("/404");
    return;
  }

  //check if user is the owner of the cube
  let isOwner = false;
  if (req.user) {
    isOwner = req.user._id === cube.owner?.toString(); // because we have ObjectId in the owner so we need toString() ? is needed for the cubes without owners in the DB
  }

  res.render("cube/details", { ...cube, isOwner });
});

// ATTACH CUBE ACCESSORY
router.get("/:cubeId/attach-accessory", isAuth, async (req, res) => {
  const { cubeId } = req.params;
  const cube = await cubeService.getCube(cubeId).lean();
  const accessories = await accessoryService.getNonAttachedAcc(
    cube.accessories
  );
  const hasAccessories = accessories.length > 0;

  res.render("./cubeAccessory/attach", { cube, accessories, hasAccessories });
});

router.post("/:cubeId/attach-accessory", isAuth, async (req, res) => {
  const { accessory: accessoryId } = req.body;
  const { cubeId } = req.params;
  await cubeService.attachAcc(cubeId, accessoryId);

  res.redirect(`/cube/details/${cubeId}`);
});

// DELETE CUBE
router.get("/:cubeId/delete", isAuth, async (req, res) => {
  const { cubeId } = req.params;
  const cube = await cubeService.getCube(cubeId).lean();
  const options = generateDiffLevel(cube.difficultyLevel);

  res.render("cube/deleteCube", { cube, options });
});

router.post("/:cubeId/delete", isAuth, async (req, res) => {
  const { cubeId } = req.params;
  await cubeService.deleteCube(cubeId);
  res.redirect("/");
});

//EDIT CUBE
router.get("/:cubeId/edit", isAuth, async (req, res) => {
  const { cubeId } = req.params;
  const cube = await cubeService.getCube(cubeId).lean();
  const options = generateDiffLevel(cube.difficultyLevel);
  res.render("cube/editCube", { cube, options });
});

router.post("/:cubeId/edit", isAuth, async (req, res) => {
  const { cubeId } = req.params;
  const owner = req.user._id;
  const { name, description, imageUrl, difficultyLevel } = req.body;
  await cubeService.editCube(cubeId, {
    name,
    description,
    imageUrl,
    difficultyLevel: Number(difficultyLevel),
    owner,
  });
  res.redirect(`/cube/details/${cubeId}`);
});

module.exports = router;

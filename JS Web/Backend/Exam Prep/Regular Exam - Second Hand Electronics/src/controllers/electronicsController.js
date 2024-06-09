const router = require("express").Router();
const { getErrorMessages } = require("../lib/utils.js");
const electroncsManager = require("../managers/electronicsManager.js");
const { isAuth } = require("../middlewares/authMiddleware.js");

// ALL 
router.get("/catalog", async (req, res) => {
  const products = await electroncsManager.getAll();
  let empty = false;
  if (products.length === 0) {
    empty = true;
  }
  res.render("product/catalog", { products, empty });
});

// CREATE 
router.get("/create", isAuth, async (req, res) => {
  res.render("product/create");
});

router.post("/create", async (req, res) => {
  const { name, type, production, exploitation, damages, imageUrl, price, description } =
    req.body;

  try {
    await electroncsManager.create({
      name,
      type,
      production,
      exploitation,
      damages,
      imageUrl,
      price,
      description,
      owner: req.user._id,
    });

    //TODO: update
    res.redirect("/products/catalog");
  } catch (error) {
    const err = getErrorMessages(error);
    res.render("product/create", {
      errorMessages: err,
      name,
      type,
      production,
      exploitation,
      damages,
      imageUrl,
      price,
      description,
    });
  }
});

// GET BY ID - DETAILS PAGE
router.get("/details/:electronicId", async (req, res) => {
  const { electronicId } = req.params;
  const electronic = await electroncsManager.getOne(electronicId);
  let isOwner = false;
  let isLoggedIn = res.locals.isLoggedIn;

  //check if there is a valid ID if not redirecting to 404
  if (!electronic) {
    res.redirect("/404");
    return;
  }

  if (req.user && req.user._id === electronic.owner?.toString()) {
    isOwner = true;
    isLoggedIn = false;
  }

  // check if user has voted already and not owner
  let hasBought = false;
  if (req.user && !isOwner) {
    const id = req.user._id;

    hasBought = electronic.byingList.toString().includes(id);
  }

  res.render("product/details", { ...electronic, isOwner, isLoggedIn, hasBought });
});

// DELETE 

router.get("/details/:electronicId/delete", isAuth, async (req, res) => {
  //check if user is owner if not redirecting to 404
  if (!res.locals.isOwner) {
    res.redirect("/404");
    return;
  }

  const { electronicId } = req.params;
  await electroncsManager.delete(electronicId);
  res.redirect("/electronics/dashboard");
});

// EDIT 
router.get("/details/:electronicId/edit", isAuth, async (req, res) => {
  //check if user is owner if not redirecting to 404
  if (!res.locals.isOwner) {
    res.redirect("/404");
    return;
  }

  const { electronicId } = req.params;
  const electronic = await electroncsManager.getOne(electronicId);
  res.render("product/edit", {...electronic});
});

router.post("/details/:electronicId/edit", isAuth, async (req, res) => {
  const { electronicId } = req.params;
  const owner = req.user._id;
  const { 
    name, 
    category, 
    color, 
    imageUrl, 
    location, 
    formula, 
    description } = req.body;

  try {
    await electroncsManager.edit(electronicId, {
      name,
      category,
      color,
      imageUrl,
      location,
      formula,
      description,
      owner,
    });

    res.redirect(`/electronics/details/${electronicId}`);
  } catch (error) {
    const err = getErrorMessages(error);
    res.render("product/edit", {
      errorMessages: err,
      name,
      category,
      color,
      imageUrl,
      location,
      formula,
      description,
    });
  }
});

// BUY 
router.get("/details/:electronicId/buy", isAuth, async (req, res) => {
  const { electronicId } = req.params;
  const userId = req.user._id;

  await electroncsManager.buy(electronicId, userId);
  res.redirect(`/products/details/${electronicId}`);
});

module.exports = router;

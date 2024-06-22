const router = require("express").Router();
const { getErrorMessages } = require("../lib/utils.js");
const creatureManager = require("../managers/creatureManager.js");
const { isAuth } = require("../middlewares/authMiddleware.js");

// ALL creatures
router.get("/dashboard", async (req, res) => {
  const creatures = await creatureManager.getAll();
  let empty = false;
  if (creatures.length === 0) {
    empty = true;
  }
  res.render("creatures/dashboard", { creatures, empty });
});

// CREATE creature
router.get("/create", isAuth, async (req, res) => {
  res.render("creatures/create");
});

router.post("/create", async (req, res) => {
  const { name, species, skinColor, eyeColor, imageUrl, description } =
    req.body;

  try {
    await creatureManager.create({
      name,
      species,
      skinColor,
      eyeColor,
      imageUrl,
      description,
      owner: req.user._id,
    });

    //TODO: update to /creatures
    res.redirect("/creatures/dashboard");
  } catch (error) {
    const err = getErrorMessages(error);
    res.render("creatures/create", {
      errorMessages: err,
      name,
      species,
      skinColor,
      eyeColor,
      imageUrl,
      description,
    });
  }
});

// GET creature BY ID - DETAILS PAGE
router.get("/details/:creatureId", async (req, res) => {
  const { creatureId } = req.params;
  const creature = await creatureManager.getOne(creatureId);
  let isOwner = false;
  let isLoggedIn = res.locals.isLoggedIn;
  // Get the names of the Creator
  const getOwner = await creatureManager.getNames(creatureId, "owner");
  const ownerName = `${getOwner.owner.firstName} ${getOwner.owner.lastName}`

  // Get the emails of the people who voted
  const voted = await creatureManager.getEmails(creatureId, "votesList");
  const votesCount = voted.votesList.length.toString()
  let userEmails;
  let noVotes = true;

  if (voted.votesList.length > 0) {
    userEmails = voted.votesList.map((email) => email);
  } else if (voted.votesList.length === 0) {
    noVotes = false;
  } else {
    userEmails = voted.votesList[0];
  }

  //check if there is a valid ID if not redirecting to 404
  if (!creature) {
    res.redirect("/404");
    return;
  }

  if (req.user && req.user._id === creature.owner?.toString()) {
    isOwner = true;
    isLoggedIn = false;
  }

  // check if user has voted already and not owner
  let hasVoted = false;
  if (req.user && !isOwner) {
    const id = req.user._id;

    hasVoted = creature.votesList.toString().includes(id);
  }

  res.render("creatures/details", { 
    ...creature, 
    isOwner, 
    isLoggedIn, 
    hasVoted, 
    ownerName, 
    userEmails, 
    noVotes,
    votesCount,
  });
});

// DELETE creature

router.get("/details/:creatureId/delete", isAuth, async (req, res) => {
  //check if user is owner if not redirecting to 404
  if (!res.locals.isOwner) {
    res.redirect("/404");
    return;
  }

  const { creatureId } = req.params;
  await creatureManager.delete(creatureId);
  res.redirect("/creatures/dashboard");
});

// EDIT creature
router.get("/details/:creatureId/edit", isAuth, async (req, res) => {
  //check if user is owner if not redirecting to 404
  if (!res.locals.isOwner) {
    res.redirect("/404");
    return;
  }

  const { creatureId } = req.params;
  const creature = await creatureManager.getOne(creatureId);
  res.render("creatures/edit", {...creature});
});

router.post("/details/:creatureId/edit", isAuth, async (req, res) => {
  const { creatureId } = req.params;
  const owner = req.user._id;
  const { 
      name,
      species,
      skinColor,
      eyeColor,
      imageUrl,
      description, } = req.body;

  try {
    await creatureManager.edit(creatureId, {
      name,
      species,
      skinColor,
      eyeColor,
      imageUrl,
      description,
      owner,
    });

    res.redirect(`/creatures/details/${creatureId}`);
  } catch (error) {
    const err = getErrorMessages(error);
    res.render("creatures/edit", {
      errorMessages: err,
      name,
      species,
      skinColor,
      eyeColor,
      imageUrl,
      description,
    });
  }
});

// VOTE creature
router.get("/details/:creatureId/vote", isAuth, async (req, res) => {
  const { creatureId } = req.params;
  const userId = req.user._id;

  await creatureManager.vote(creatureId, userId);
  res.redirect(`/creatures/details/${creatureId}`);
});

module.exports = router;

const router = require("express").Router();
const { getErrorMessages } = require("../lib/utils.js");
const courseManager = require("../managers/courseManager.js");
const { isAuth } = require("../middlewares/authMiddleware.js");

// ALL COURSES
router.get("/", async (req, res) => {
  const courses = await courseManager.getAll();
  let empty = false;
  if (courses.length === 0) {
    empty = true;
  }
  res.render("courses/catalog", { courses, empty });
});

// CREATE COURSE
router.get("/create", isAuth, async (req, res) => {
  res.render("courses/create");
});

router.post("/create", async (req, res) => {
  const { title, type, certificate, imageUrl, description, price } =
    req.body;

  try {
    await courseManager.create({
      title,
      type,
      certificate,
      imageUrl,
      description,
      price,
      owner: req.user._id,
    });

    //TODO: update to /courses
    res.redirect("/courses");
  } catch (error) {
    const err = getErrorMessages(error);
    res.render("courses/create", {
      errorMessages: err,
      title,
      type,
      certificate,
      imageUrl,
      description,
      price,
    });
  }
});

// GET COURSE BY ID - DETAILS PAGE
router.get("/details/:courseId", async (req, res) => {
  const { courseId } = req.params;
  const course = await courseManager.getOne(courseId);
  let isOwner = false;
  let isLoggedIn = res.locals.isLoggedIn;
  
  const getOwner = await courseManager.getEmails(courseId, "owner");
  const ownerEmail = getOwner.owner.email
  const signedUp = await courseManager.getEmails(courseId, "signUpList");
  let userEmails
  let noSingnUps = true

  if (signedUp.signUpList.length > 0) {
    userEmails = signedUp.signUpList.map(email => email);
  } else  if(signedUp.signUpList.length === 0) {
    noSingnUps = false
  } else{
    userEmails = signedUp.signUpList[0];
  }

  // check if there is a valid ID if not redirecting to 404
  if (!course) {
    res.redirect("/404");
    return;
  }

  if (req.user && req.user._id === course.owner?.toString()) {
    isOwner = true;
    isLoggedIn = false;
  }

  // check if user has voted already and not owner
  let hasSignedUp = false;
  if (req.user && !isOwner) {
    const id = req.user._id;

    hasSignedUp = course.signUpList.toString().includes(id);
  }



  res.render("courses/details", { ...course, ownerEmail, isOwner, isLoggedIn, hasSignedUp, noSingnUps, userEmails  });
});

// DELETE COURSE

router.get("/details/:courseId/delete", isAuth, async (req, res) => {
  //check if user is owner if not redirecting to 404
  if (!res.locals.isOwner) {
    res.redirect("/404");
    return;
  }

  const { courseId } = req.params;
  await courseManager.deleteStone(courseId);
  res.redirect("/courses/dashboard");
});

// EDIT COURSE
router.get("/details/:courseId/edit", isAuth, async (req, res) => {
  //check if user is owner if not redirecting to 404
  if (!res.locals.isOwner) {
    res.redirect("/404");
    return;
  }

  const { courseId } = req.params;
  const course = await courseManager.getStone(courseId);
  res.render("courses/edit", {...course});
});

router.post("/details/:courseId/edit", isAuth, async (req, res) => {
  const { courseId } = req.params;
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
    await courseManager.editStone(courseId, {
      name,
      category,
      color,
      imageUrl,
      location,
      formula,
      description,
      owner,
    });

    res.redirect(`/courses/details/${courseId}`);
  } catch (error) {
    const err = getErrorMessages(error);
    res.render("courses/edit", {
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

// LIKE COURSE
router.get("/details/:courseId/signUp", isAuth, async (req, res) => {
  const { courseId } = req.params;
  const userId = req.user._id;

  await courseManager.signUp(courseId, userId);
  res.redirect(`/courses/details/${courseId}`);
});

module.exports = router;

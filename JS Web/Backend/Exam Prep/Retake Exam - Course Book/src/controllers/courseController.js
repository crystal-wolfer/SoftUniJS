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
  const course = await courseManager.getStone(courseId);
  let isOwner = false;
  let isLoggedIn = res.locals.isLoggedIn;

  //check if there is a valid ID if not redirecting to 404
  if (!course) {
    res.redirect("/404");
    return;
  }

  if (req.user && req.user._id === course.owner?.toString()) {
    isOwner = true;
    isLoggedIn = false;
  }

  // check if user has voted already and not owner
  let hasLiked = false;
  if (req.user && !isOwner) {
    const id = req.user._id;

    hasLiked = course.likedList.toString().includes(id);
  }

  res.render("courses/details", { ...course, isOwner, isLoggedIn, hasLiked });
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
router.get("/details/:courseId/like", isAuth, async (req, res) => {
  const { courseId } = req.params;
  const userId = req.user._id;

  await courseManager.likeStone(courseId, userId);
  res.redirect(`/courses/details/${courseId}`);
});

module.exports = router;

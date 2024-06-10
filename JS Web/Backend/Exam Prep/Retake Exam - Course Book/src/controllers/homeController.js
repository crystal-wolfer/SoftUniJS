const router = require("express").Router();
const courseManager = require("../managers/courseManager.js");


router.get("/", async (req, res) => {
  const courses = await courseManager.getLastThree();
  let empty = false;
  if (courses.length === 0) {
    empty = true;
  }
  res.render("home", { courses, empty });
});

// My profile page
router.get("/my-profile", async (req, res) => {
  const id = req.user._id;
  const email = req.user.email
  const createdCourses = await courseManager.createdCourses(id);
  const signedUpCourses = await courseManager.signedUpCourses(id);
  res.render("profile", {createdCourses, id, email, signedUpCourses});
});


// setting up every wrong endpoint to redirect to a 404 endpoint
router.get("/404", (req, res) => {
  res.render("404");
});

module.exports = router;

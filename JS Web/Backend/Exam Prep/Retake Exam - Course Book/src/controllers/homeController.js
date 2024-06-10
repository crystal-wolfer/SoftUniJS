const router = require("express").Router();
const courseManager = require("../managers/courseManager.js");


router.get("/", async (req, res) => {
  const courses = await courseManager.getLastThree();
  let empty = true;
  if (courses.length === 0) {
    empty = true;
  }
  res.render("home", { courses, empty });
});

// TODO: FIX
// router.get("/search", async (req, res) => {
//   const stones = await stoneManager.getAllStones();
//   let empty = false;
//   if (stones.length === 0) {
//     empty = true;
//   }
//   res.render("search", {stones, empty});
// });

// router.post("/search", async (req, res) => {
//   const { name } = req.body;
//   const stones = await stoneManager.search(name); 
//   let empty = false;
//   if (stones.length === 0) {
//     empty = true;
//   }

//   res.render("search", { stones, name, empty });
// });

// setting up every wrong endpoint to redirect to a 404 endpoint
router.get("/404", (req, res) => {
  res.render("404");
});

module.exports = router;

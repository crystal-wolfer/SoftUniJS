// const router = require("express").Router();
// const { getErrorMessages } = require("../lib/utils.js");
// const stoneManager = require("../managers/stoneManager.js");
// const { isAuth } = require("../middlewares/authMiddleware.js");

// // ALL STONES
// router.get("/dashboard", async (req, res) => {
//   const stones = await stoneManager.getAll();
//   let empty = false;
//   if (stones.length === 0) {
//     empty = true;
//   }
//   res.render("product/dashboard", { stones, empty });
// });

// // CREATE STONE
// router.get("/create", isAuth, async (req, res) => {
//   res.render("product/create");
// });

// router.post("/create", async (req, res) => {
//   const { name, category, color, imageUrl, location, formula, description } =
//     req.body;

//   try {
//     await stoneManager.create({
//       name,
//       category,
//       color,
//       imageUrl,
//       location,
//       formula,
//       description,
//       owner: req.user._id,
//     });

//     //TODO: update to /stones
//     res.redirect("/stones/dashboard");
//   } catch (error) {
//     const err = getErrorMessages(error);
//     res.render("product/create", {
//       errorMessages: err,
//       name,
//       category,
//       color,
//       imageUrl,
//       location,
//       formula,
//       description,
//     });
//   }
// });

// // GET STONE BY ID - DETAILS PAGE
// router.get("/details/:stoneId", async (req, res) => {
//   const { stoneId } = req.params;
//   const stone = await stoneManager.getOne(stoneId);
//   let isOwner = false;
//   let isLoggedIn = res.locals.isLoggedIn;

//   //check if there is a valid ID if not redirecting to 404
//   if (!stone) {
//     res.redirect("/404");
//     return;
//   }

//   if (req.user && req.user._id === stone.owner?.toString()) {
//     isOwner = true;
//     isLoggedIn = false;
//   }

//   // check if user has voted already and not owner
//   let hasLiked = false;
//   if (req.user && !isOwner) {
//     const id = req.user._id;

//     hasLiked = stone.likedList.toString().includes(id);
//   }

//   res.render("product/details", { ...stone, isOwner, isLoggedIn, hasLiked });
// });

// // DELETE STONE

// router.get("/details/:stoneId/delete", isAuth, async (req, res) => {
//   //check if user is owner if not redirecting to 404
//   if (!res.locals.isOwner) {
//     res.redirect("/404");
//     return;
//   }

//   const { stoneId } = req.params;
//   await stoneManager.delete(stoneId);
//   res.redirect("/stones/dashboard");
// });

// // EDIT STONE
// router.get("/details/:stoneId/edit", isAuth, async (req, res) => {
//   //check if user is owner if not redirecting to 404
//   if (!res.locals.isOwner) {
//     res.redirect("/404");
//     return;
//   }

//   const { stoneId } = req.params;
//   const stone = await stoneManager.getOne(stoneId);
//   res.render("product/edit", {...stone});
// });

// router.post("/details/:stoneId/edit", isAuth, async (req, res) => {
//   const { stoneId } = req.params;
//   const owner = req.user._id;
//   const { 
//     name, 
//     category, 
//     color, 
//     imageUrl, 
//     location, 
//     formula, 
//     description } = req.body;

//   try {
//     await stoneManager.edit(stoneId, {
//       name,
//       category,
//       color,
//       imageUrl,
//       location,
//       formula,
//       description,
//       owner,
//     });

//     res.redirect(`/stones/details/${stoneId}`);
//   } catch (error) {
//     const err = getErrorMessages(error);
//     res.render("product/edit", {
//       errorMessages: err,
//       name,
//       category,
//       color,
//       imageUrl,
//       location,
//       formula,
//       description,
//     });
//   }
// });

// // LIKE STONE
// router.get("/details/:stoneId/like", isAuth, async (req, res) => {
//   const { stoneId } = req.params;
//   const userId = req.user._id;

//   await stoneManager.like(stoneId, userId);
//   res.redirect(`/stones/details/${stoneId}`);
// });

// module.exports = router;

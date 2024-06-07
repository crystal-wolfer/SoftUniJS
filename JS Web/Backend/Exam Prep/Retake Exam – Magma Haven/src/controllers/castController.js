// const router = require("express").Router();
// const { getErrorMessages, getFields } = require("../lib/utils.js");
// const castManager = require("../managers/castManager.js");

// router.get("/create", (req, res) => {
//   res.render("./cast/create");
// });

// router.post("/create", async (req, res) => {
//   const { name, age, born, character, imageUrl } = req.body;

//   try {
//     await castManager.createCast({
//       name,
//       age: Number(age),
//       born,
//       character,
//       imageUrl,
//     });
//     res.redirect("/");
//   } catch (error) {
//     const err = getErrorMessages(error);
//     const errFields = getFields(err);
//     const isEmpty = Object.keys(errFields).length === 0;

//     // Check where the error came from and render the rest of the fields filled in
//     if (!isEmpty) {
//       res.status(400).render("./cast/create", {
//         errorMessages: err,
//         errorN: errFields.errorN,
//         errorA: errFields.errorA,
//         errorB: errFields.errorB,
//         errorC: errFields.errorC,
//         errorI: errFields.errorI,
//         name,
//         age: Number(age),
//         born,
//         character,
//         imageUrl,
//       });
//     } else {
//       res.status(400).render("./cast/create", { errorMessages: err });
//     }
//   }
// });

// module.exports = router;

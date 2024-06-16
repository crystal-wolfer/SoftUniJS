const router = require("express").Router();
const { getErrorMessages } = require("../lib/utils.js");
const bookManager = require("../managers/bookManager.js");
const { isAuth } = require("../middlewares/authMiddleware.js");

// ALL BOOKS
router.get("/catalog", async (req, res) => {
  const books = await bookManager.getAll();
  res.render("books/catalog", { books });
});

// CREATE BOOK
router.get("/create", isAuth, async (req, res) => {
  res.render("books/create");
});

router.post("/create", async (req, res) => {
  const { title, author, genre, stars, imageUrl, review } = req.body;

  try {
    await bookManager.create({
      title,
      author,
      genre,
      stars,
      imageUrl,
      review,
      owner: req.user._id,
    });

    //TODO: update to /books
    res.redirect("/books/catalog");
  } catch (error) {
    const err = getErrorMessages(error);
    res.render("books/create", {
      errorMessages: err,
      title,
      author,
      genre,
      stars,
      imageUrl,
      review,
    });
  }
});

// GET BOOK BY ID - DETAILS PAGE
router.get("/details/:bookId", async (req, res) => {
  const { bookId } = req.params;
  const book = await bookManager.getOne(bookId);
  let isOwner = false;
  let isLoggedIn = res.locals.isLoggedIn;

  //check if there is a valid ID if not redirecting to 404
  if (!book) {
    res.redirect("/404");
    return;
  }

  if (req.user && req.user._id === book.owner?.toString()) {
    isOwner = true;
    isLoggedIn = false;
  }

  // check if user has voted already and not owner
  let hasWished = false;
  if (req.user && !isOwner) {
    const id = req.user._id;

    hasWished = book.wishingList.toString().includes(id);
  }

  res.render("books/details", { ...book, isOwner, isLoggedIn, hasWished });
});

// DELETE BOOK

router.get("/details/:bookId/delete", isAuth, async (req, res) => {
  //check if user is owner if not redirecting to 404
  if (!res.locals.isOwner) {
    res.redirect("/404");
    return;
  }

  const { bookId } = req.params;
  await bookManager.delete(bookId);
  res.redirect("/books/catalog");
});

// EDIT BOOK
router.get("/details/:bookId/edit", isAuth, async (req, res) => {
  //check if user is owner if not redirecting to 404
  if (!res.locals.isOwner) {
    res.redirect("/404");
    return;
  }

  const { bookId } = req.params;
  const book = await bookManager.getOne(bookId);
  res.render("books/edit", { ...book });
});

router.post("/details/:bookId/edit", isAuth, async (req, res) => {
  const { bookId } = req.params;
  const owner = req.user._id;
  const { title, author, genre, stars, imageUrl, review } =
    req.body;

  try {
    await bookManager.edit(bookId, {
      title,
      author,
      genre,
      stars,
      imageUrl,
      review,
      owner,
    });

    res.redirect(`/books/details/${bookId}`);
  } catch (error) {
    const err = getErrorMessages(error);
    res.render("books/edit", {
      errorMessages: err,
      title,
      author,
      genre,
      stars,
      imageUrl,
      review,
    });
  }
});

// WISHLIST BOOK
router.get("/details/:bookId/wish", isAuth, async (req, res) => {
  const { bookId } = req.params;
  const userId = req.user._id;

  await bookManager.wish(bookId, userId);
  res.redirect(`/books/details/${bookId}`);
});

module.exports = router;

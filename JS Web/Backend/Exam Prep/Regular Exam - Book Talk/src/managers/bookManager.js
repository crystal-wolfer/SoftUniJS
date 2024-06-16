const Book = require("../models/Book.js");

exports.create = async (bookData) => {
  await Book.validate(bookData);
  const newBook = await Book.create(bookData);
  return newBook;
};

exports.getAll = async () => {
  let books = await Book.find().lean();
  return books;
};

exports.getOne = async (id) => {
  const book = await Book.findById(id).lean();
  return book;
};


//REMOVE IF NOT NEEDED - query that retrieves the last 3 entries from the database
exports.getLastThree = async () => {
  let courses = await Book.find()
  .sort({ createdAt: -1 })
  .limit(3)
  .lean();

  return courses;
};

//REMOVE IF NOT NEEDED - query that retrieves the last 3 entries from the database
exports.getEmails = async (id, path) => {
  const data = await Book.findById(id)
    .populate({
      path: path,
      select:'email'
    }).lean();

  return data;
};

// TODO: This needs to be renamed
exports.wish = async (bookId, userId) => {
  const book = await Book.findById(bookId);
  book.wishingList.push(userId);
  return book.save();
}


exports.delete = async (bookId) => {
  await Book.findByIdAndDelete(bookId);
  return;
};

exports.edit = async (bookId, bookData) => {
  await Book.validate(bookData);
  await Book.findByIdAndUpdate(bookId, bookData);
  return;
};

// TODO: This needs to be reworked
exports.search = async (name, typeBook) => {
  let books = await Book.find().lean();

  if (name) {
    books = books.filter((m) =>
      m.name.toLowerCase().includes(name.toLowerCase())
    );
  }

  if (typeBook) {
    books = books.filter((m) =>
      m.typeBook.toLowerCase().includes(typeBook.toLowerCase())
    );
  }
  return books;
};

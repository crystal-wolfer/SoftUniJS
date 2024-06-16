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


// Query that retrieves all books the given user has added to wishList
exports.wishList = async (id) => {
  const wishList =  await Book.find(
    {wishingList: { $elemMatch: { $eq: id } }}).lean();

  return wishList;
}

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

const Course = require("../models/Course.js")

exports.create = async (courseData) => {
  await Course.validate(courseData);
  const newCourse = await Course.create(courseData);
  return newCourse;
};

exports.getAll = async () => {
  let courses = await Course.find().lean();
  return courses;
};

//REMOVE IF NOT NEEDED - query that retrieves the last 3 entries from the database
exports.getLastThree = async () => {
  let courses = await Course.find()
  .sort({ createdAt: -1 })
  .limit(3)
  .lean();

  return courses;
};

exports.getOne = async (id) => {
  const course = await Course.findById(id).lean();
  return course;
};

// TODO: This needs to be renamed
exports.signUp = async (courseId, userId) => {
  const course = await Course.findById(courseId);
  course.byingList.push(userId);
  return course.save();
}


exports.delete = async (courseId) => {
  await Course.findByIdAndDelete(courseId);
  return;
};

exports.edit = async (courseId, courseData) => {
  await Course.validate(courseData);
  await Course.findByIdAndUpdate(courseId, courseData);
  return;
};

// TODO: This needs to be reworked
exports.search = async (name, type) => {
  let courses = await Course.find().lean();

  if (name) {
    courses = courses.filter((m) =>
      m.name.toLowerCase().includes(name.toLowerCase())
    );
  }

  if (type) {
    courses = courses.filter((m) =>
      m.type.toLowerCase().includes(type.toLowerCase())
    );
  }
  return courses;
};

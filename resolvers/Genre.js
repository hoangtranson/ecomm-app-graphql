const { COURSES } = require("../database");

exports.Genre = {
  courses: (parent, args, context) => {
    const genreId = parent.id;

    return COURSES.filter((item) => item.genreId === genreId);
  },
};

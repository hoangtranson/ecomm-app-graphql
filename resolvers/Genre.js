exports.Genre = {
  courses: (parent, args, context) => {
    const genreId = parent.id;
    const courses = context.courses;
    return courses.filter((item) => item.genreId === genreId);
  },
};

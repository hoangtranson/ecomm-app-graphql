exports.Genre = {
  courses: (parent, args, context) => {
    const genreId = parent.id;
    const courses = context.courses;
    const { filter } = args;
    let filteredGenre = courses.filter((item) => item.genreId === genreId);

    if (filter && filter.discount) {
      filteredGenre = filteredGenre.filter((item) => item.discount);
    }
    return filteredGenre;
  },
};

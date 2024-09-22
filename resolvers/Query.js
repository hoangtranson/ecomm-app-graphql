exports.Query = {
  courses: (parent, args, context, info) => {
    let filteredCourses = context.courses;
    const { filter } = args;

    if (filter && filter.discount) {
      filteredCourses = filteredCourses.filter((course) => course.discount);
    }

    return filteredCourses;
  },
  course: (parent, args, context, info) => {
    const courses = context.courses;
    return courses.find((course) => course.id === args.id);
  },
  genres: (parent, args, context, info) => context.genres,
  genre: (parent, args, context, info) => {
    const genres = context.genres;
    return genres.find((genre) => genre.id === args.id);
  },
};

exports.Query = {
  courses: (parent, args, context, info) => context.courses,
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

const { COURSES, GENRES } = require("../database");

exports.Query = {
  welcome: () => {
    return "Weclome to the World of GraphQL";
  },
  numOfCourses: () => 5,
  price: () => 100.5,
  isTrainer: () => true,
  courses: () => COURSES,
  course: (parent, args, context, info) => {
    return COURSES.find((course) => course.id === args.id);
  },
  genres: () => GENRES,
  genre: (parent, args, context, info) => {
    return GENRES.find((genre) => genre.id === args.id);
  },
};

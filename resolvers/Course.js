const { GENRES } = require("../database");

exports.Course = {
  genre: (parent, args, context, info) => {
    return GENRES.find((genre) => genre.id === parent.genreId);
  },
};

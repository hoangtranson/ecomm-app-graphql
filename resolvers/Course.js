exports.Course = {
  genre: (parent, args, context, info) => {
    const genres = context.genres;
    return genres.find((genre) => genre.id === parent.genreId);
  },
};

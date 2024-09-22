exports.Course = {
  genre: (parent, args, context, info) => {
    const genres = context.genres;
    return genres.find((genre) => genre.id === parent.genreId);
  },
  reviews: (parent, args, context, info) => {
    const reviews = context.reviews;
    return reviews.filter((review) => review.courseId === parent.id);
  },
};

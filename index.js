const { ApolloServer, gql } = require("apollo-server");
const { typeDefs } = require("./schema");
const { Query } = require("./resolvers/Query");
const { Course } = require("./resolvers/Course");
const { Genre } = require("./resolvers/Genre");
const { COURSES, GENRES, REVIEWS } = require("./database");

const server = new ApolloServer({
  typeDefs,
  resolvers: { Query, Course, Genre },
  context: {
    courses: COURSES,
    genres: GENRES,
    reviews: REVIEWS
  }
});

server.listen().then(({ url }) => console.log(`Server is running at ${url}`));

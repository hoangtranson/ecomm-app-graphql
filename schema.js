const { gql } = require("apollo-server");

// There are four scalar types in GraphQL: String, Int, Float, and Boolean
exports.typeDefs = gql`
  type Query {
    courses(filter: CoursesFilter): [Course!]!
    course(id: ID!): Course
    genres: [Genre!]!
    genre(id: ID!): Genre
  }

  type Mutation {
    addGenre(input: AddGenreInput!): Genre!
  }

  type Course {
    name: String!
    description: String!
    price: Float!
    discount: Boolean!
    genre: Genre
    reviews: [Review!]!
  }

  type Genre {
    id: ID!
    name: String!
    courses(filter: CoursesFilter): [Course!]!
  }

  type Review {
    id: ID!
    date: String!
    title: String!
    comment: String!
    rating: Int!
  }

  input CoursesFilter {
    discount: Boolean
  }

  input AddGenreInput {
    name: String!
  }
`;

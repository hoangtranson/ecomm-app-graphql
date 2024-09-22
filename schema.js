const { gql } = require("apollo-server");

// There are four scalar types in GraphQL: String, Int, Float, and Boolean
exports.typeDefs = gql`
  type Query {
    welcome: String
    numOfCourses: Int
    price: Float
    isTrainer: Boolean
    courses: [Course!]!
    course(id: ID!): Course
    genres: [Genre!]!
    genre(id: ID!): Genre
  }

  type Course {
    name: String!
    description: String!
    price: Float!
    discount: Boolean!
    genre: Genre
  }

  type Genre {
    id: ID!
    name: String!
    courses: [Course!]!
  }
`;
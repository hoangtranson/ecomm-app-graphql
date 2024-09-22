const { ApolloServer, gql } = require("apollo-server");

const GENRES = [
  { id: "cat-01", name: "Technical" },
  { id: "cat-02", name: "History" },
];

const COURSES = [
  {
    id: "1",
    name: "JavaScript",
    description: "JavaScript course",
    price: 100,
    discount: true,
  },
  {
    id: "2",
    name: "React",
    description: "React course",
    price: 200,
    discount: false,
  },
];

// There are four scalar types in GraphQL: String, Int, Float, and Boolean
const typeDefs = gql`
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
  }

  type Genre {
    id: ID!
    name: String!
  }
`;


const resolvers = {
  Query: {
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
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => console.log(`Server is running at ${url}`));

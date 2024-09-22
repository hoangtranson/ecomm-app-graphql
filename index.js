const { ApolloServer, gql } = require("apollo-server");

const GENRES = [
  { id: "cat-01", name: "Technical" },
  { id: "cat-02", name: "History" },
];

const COURSES = [
  {
    id: "book-01",
    name: "JavaScript",
    description: "JavaScript course",
    price: 100,
    discount: true,
    genreId: "cat-01",
  },
  {
    id: "book-02",
    name: "React",
    description: "React course",
    price: 200,
    discount: false,
    genreId: "cat-02",
  },
  {
    id: "book-08",
    name: "NextJS Basics",
    description: "NextJS Basics for beginners",
    price: 599.99,
    discount: false,
    genreId: "cat-01",
  },

  {
    id: "book-21",
    name: "The Immortals of Meluha",
    description: "Shiva Trilogy -1",
    price: 299.99,
    discount: false,
    genreId: "cat-02",
  },

  {
    id: "book-22",
    name: "The Secret of the Nagas",
    description: "Shiva Trilogy -2",
    price: 199.99,
    discount: true,
    genreId: "cat-02",
  },

  {
    id: "book-23",
    name: "The Oath of the Vayuputras",
    description: "Shiva Trilogy -3",
    price: 599.99,
    discount: false,
    genreId: "cat-02",
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
    genre: Genre
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
  Course: {
    genre: (parent, args, context, info) => {
      return GENRES.find((genre) => genre.id === parent.genreId);
    },
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => console.log(`Server is running at ${url}`));

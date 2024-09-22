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

module.exports = { GENRES, COURSES };

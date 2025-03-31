const Books = [
  {
    title: "Things Fall Apart",
    author: "Chinua Achebe",
    imageLink: "images/things-fall-apart.jpeg",
    isbn: "978-0-385-05770-8", // Example ISBN
    status: "available", // Example status
    checkedOutBy: null, // No one has checked it out
    dueDate: null, // Not checked out, so no due date
  },
  {
    title: "Fairy Tales",
    author: "Hans Christian Andersen",
    imageLink: "images/fairytails.jpg",
    isbn: "978-1-891786-33-3",
    status: "checked out", // Example status
    checkedOutBy: "John Doe", // Example checked out by
    dueDate: "2025-04-15", // Example due date
  },
  {
    title: "The Divine Comedy",
    author: "Dante Alighieri",
    imageLink: "images/thedivinecomedy.jpg",
    isbn: "978-1-885219-39-7",
    status: "available",
    checkedOutBy: null,
    dueDate: null,
  },
  {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    imageLink: "images/PrideAndPrejudice.jpg",
    isbn: "978-1-85326-000-1",
    status: "checked out",
    checkedOutBy: "Alice Smith",
    dueDate: "2025-03-30",
  },
  {
    title: "Le Père Goriot",
    author: "Honoré de Balzac",
    imageLink: "images/leperegoriot.png",
    isbn: "978-1-885219-40-3",
    status: "available",
    checkedOutBy: null,
    dueDate: null,
  },
  {
    title: "Molloy",
    author: "Samuel Beckett",
    imageLink: "images/Molloy.jpg",
    isbn: "978-0-674-02442-5",
    status: "available",
    checkedOutBy: null,
    dueDate: null,
  },
  {
    title: "Ficciones",
    author: "Jorge Luis Borges",
    imageLink: "images/Ficciones.jpg",
    isbn: "978-1-85584-001-9",
    status: "checked out",
    checkedOutBy: "Emily Watson",
    dueDate: "2025-05-01",
  },
  {
    title: "Wuthering Heights",
    author: "Emily Brontë",
    imageLink: "images/wuthering-heights.jpg",
    isbn: "978-0-19-953695-0",
    status: "available",
    checkedOutBy: null,
    dueDate: null,
  },
  {
    title: "The Stranger",
    author: "Albert Camus",
    imageLink: "images/strangernovel.jpeg",
    isbn: "978-0-679-72385-7",
    status: "available",
    checkedOutBy: null,
    dueDate: null,
  },
  {
    title: "Journey to the End of the Night",
    author: "Louis-Ferdinand Céline",
    imageLink: "images/journey.jpg",
    isbn: "978-0-943704-42-0",
    status: "checked out",
    checkedOutBy: "George Green",
    dueDate: "2025-06-10",
  },
];

export default Books;

const books = [
    { title: "Harry Potter y la piedra filosofal", isRead: true },
    { title: "Canción de hielo y fuego", isRead: false },
    { title: "Devastación", isRead: true },
  ];  

// READ BOOKS

function isBookRead(books, titleToSearch) {
    const book = books.find(b =>  b.title === titleToSearch );
    return book ? book.isRead : false;
  }

console.log(isBookRead(books, "Devastación"));
console.log(isBookRead(books, "Canción de hielo y fuego"));
console.log(isBookRead(books, "Los Pilares de la Tierra"));

interface book {

    title: string,
    isRead: boolean,  
};

  const typedBooks : book[] = [
    { title: "Harry Potter y la piedra filosofal", isRead: true },
    { title: "Canción de hielo y fuego", isRead: false },
    { title: "Devastación", isRead: true },
  ];  

// OPTIONAL

const typedIsBookRead = (books: any[], titleToSearch: string) : boolean => {
    const book : book  = books.find(b =>  b.title === titleToSearch );
    return book ? book.isRead : false;
  }

console.log(typedIsBookRead(typedBooks, "Devastación"));
console.log(typedIsBookRead(typedBooks, "Canción de hielo y fuego"));
console.log(typedIsBookRead(typedBooks, "Los Pilares de la Tierra"));

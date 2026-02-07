import { useEffect, useState } from "react";
import { BookContext } from "./bookContext";

export const BookContextProvider = ({ children }) => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("/books.json")
      .then((res) => res.json())
      .then((books) => setBooks(books))
      .catch((err) => console.error(`fetching books failed : ERROR :: ${err}`));
  });
  return (
    <BookContext.Provider value={{ books, setBooks }}>
      {children}
    </BookContext.Provider>
  );
};

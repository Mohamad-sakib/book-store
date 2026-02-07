import { useContext } from "react";
import { Book } from "./Book";
import { BookContext } from "../contexts/bookContext";

export const Books = () => {
  const { books } = useContext(BookContext);
  return (
    books.length > 0 && (
      <div>
        <h1>ALL BOOKS</h1>
        {books.map((book) => (
          <Book book={book} key={book.id} />
        ))}
      </div>
    )
  );
};

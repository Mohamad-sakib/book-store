import { useContext } from "react";
import { Book } from "./Book";
import { BookContext } from "../contexts/bookContext";

export const Books = () => {
  const { books } = useContext(BookContext);
  return (
    <div>
      <h1>ALL BOOKS</h1>
      {books.map((book) => (
        <Book book={book} />
      ))}
    </div>
  );
};

import { useContext } from "react";
import { Book } from "./Book";
import { BookContext } from "../contexts/bookContext";
import { useLocation } from "react-router-dom";

export const Books = () => {
  const { books } = useContext(BookContext);
  const params = new URLSearchParams(useLocation().search);
  const searchKeyword = params.get("search");
  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchKeyword.toLocaleLowerCase()),
  );

  return (
    filteredBooks.length > 0 && (
      <div>
        <h1>ALL BOOKS</h1>
        {filteredBooks.map((book) => (
          <Book book={book} key={book.id} />
        ))}
      </div>
    )
  );
};

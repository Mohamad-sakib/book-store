import { useContext } from "react";
import { BookContext } from "../contexts/bookContext";
import { useParams } from "react-router-dom";

export const BookDetail = () => {
  const { books } = useContext(BookContext);
  const { id } = useParams();
  const book = books.find((book) => book.id === Number(id));
  return (
    books.length > 0 && (
      <div>
        <h3>
          {book.title} by {book.author}
        </h3>
        description : {book.description}
        <h4></h4>
      </div>
    )
  );
};

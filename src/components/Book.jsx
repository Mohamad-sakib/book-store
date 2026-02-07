export const Book = ({ book }) => {
  return (
    <div>
      <h3>
        {book.title} by {book.author}
      </h3>
      description : {book.description}
      <h4></h4>
    </div>
  );
};

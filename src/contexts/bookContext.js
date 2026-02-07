import { createContext, useState } from "react";

export const bookContext = createContext([]);

export const BookContextProvider = ({ children }) => {
  const [books, setBooks] = useState([]);
  return (
    <bookContext.Provider value={{ books, setBooks }}>
      {children}
    </bookContext.Provider>
  );
};

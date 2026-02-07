import { BookDetail } from "./components/BookDetails";
import { Books } from "./components/Books";
import { NotFound } from "./components/NotFound";
import { BookContextProvider } from "./contexts/BookContextProvider";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BookContextProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Books />}></Route>
          <Route path="books/:id" element={<BookDetail />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </Router>
    </BookContextProvider>
  );
}

export default App;

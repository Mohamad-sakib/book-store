import { BookDetail } from "./components/BookDetails";
import { Books } from "./components/Books";
import { NotFound } from "./components/NotFound";
import { PrivateRoute } from "./components/PrivateRoute";
import { BookContextProvider } from "./contexts/BookContextProvider";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

function App() {
  return (
    <BookContextProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Books />}></Route>
          <Route path="/books" element={<Navigate to="/" />}></Route>
          <Route
            path="books/:id"
            element={
              <PrivateRoute>
                <BookDetail />
              </PrivateRoute>
            }
          ></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </Router>
    </BookContextProvider>
  );
}

export default App;

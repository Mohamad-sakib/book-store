import { Books } from "./components/Books";
import { BookContextProvider } from "./contexts/BookContextProvider";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BookContextProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Books />}></Route>
        </Routes>
      </Router>
    </BookContextProvider>
  );
}

export default App;

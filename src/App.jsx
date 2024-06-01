// Import for all the items required to add routes for the application.
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

// Import for all the pages in the routes.
import Home from "./pages/Home";
import About from "./pages/About";

const App = () => {
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;

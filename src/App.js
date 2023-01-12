import "./App.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./components/Home";
import SearchPage from "./components/SearchPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route exact path="/searchPage" element={<SearchPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

import { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Account from "./components/Account";
import Books from "./components/Books";
import Home from "./components/Home";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Register from "./components/Register";
import SingleBook from "./components/SingleBook";
import bookLogo from "./assets/books.png";
import "./index.css";

function App() {
  const [token, setToken] = useState(null);
  const navigate = useNavigate();

  return (
    <>
      <h1>
        <img id="logo-image" src={bookLogo} />
        Library App
      </h1>
      <div id="container">
        <Navbar token={token} />
      </div>
      <div>
        <Routes>
          <Route path="" element={<Home />} />
          <Route
            path="/login"
            element={<Login setToken={setToken} navigate={navigate} />}
          />
          <Route
            path="/register"
            element={<Register setToken={setToken} navigate={navigate} />}
          />
          <Route path="/books" element={<Books navigate={navigate} />} />
          <Route
            path="/books/:id"
            element={<SingleBook token={token} navigate={navigate} />}
          />
          <Route
            path="/account"
            element={<Account token={token} navigate={navigate} />}
          />
        </Routes>
      </div>
    </>
  );
}

export default App;

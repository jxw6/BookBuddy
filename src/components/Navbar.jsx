import { Link } from "react-router-dom";

export default function Navbar({ token }) {
  return (
    <div className="navbar">
      <Link to="/">
        Home
      </Link>
      <Link to="/books">
        Books
      </Link>
      {token && (
        <Link to="/account">
          Account
        </Link>
      )}
      {!token && (
        <Link to="/register" key="register">
          Register
        </Link>
      )}
      {!token && (
        <Link to="/login" key="login">
          Login
        </Link>
      )}
    </div>
  );
}

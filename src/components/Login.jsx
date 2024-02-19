import { loginAPI } from "../API";

export default function Login({ setToken, navigate }) {
  function formSubmitted(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formObject = Object.fromEntries(formData.entries());
    loginAPI(formObject, setToken);
    navigate("/");
  }

  return (
    <div className="loginForm">
      <h2>Login</h2>
      <form onSubmit={formSubmitted}>
        <label>
          Email: <input type="email" name="email" required />
        </label>
        <label>
          Password: <input type="password" name="password" required />
        </label>
        <input type="submit" value="Login" />
      </form>
    </div>
  );
}

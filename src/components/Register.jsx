import { registerAPI } from "../API";

export default function Register({ setToken, navigate }) {
  function formSubmitted(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formObject = Object.fromEntries(formData.entries());
    registerAPI(formObject, setToken);
    navigate("/");
  }

  return (
    <div>
      <h2>Register an Account</h2>
      <form onSubmit={formSubmitted}>
        <label>
          First name:
          <input name="firstname" type="text" />
        </label>
        <label>
          Last name:
          <input name="lastname" type="text" />
        </label>
        <label>
          Email:
          <input name="email" type="email" required/>
        </label>
        <label>
          Password:
          <input name="password" type="password" required/>
        </label>
        <input type="submit" value="Register Account"></input>
      </form>
    </div>
  );
}

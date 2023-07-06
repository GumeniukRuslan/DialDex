import { useDispatch } from "react-redux";
import { logInThunk } from "redux/auth/thunk";

export const LogIn = () => {

  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logInThunk({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="userEmail">Email</label>
        <input id="userEmail" minLength="3" maxLength="20" type="email" name="email" required />
      </div>
      <div>
        <label htmlFor="userPassword">Password</label>
        <input id="userPassword" minLength="7" maxLength="20" type="password" name="password" required />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}
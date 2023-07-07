import { StyledForm } from "components/ContactFrom/contactForm.styled";
import { useDispatch } from "react-redux";
import { registerThunk } from "redux/auth/thunk";

export const SignUp = () => {
 const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      registerThunk({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <div>
        <label htmlFor="userName">Name</label>
        <input id="userName" minLength="3" maxLength="20" type="text" name="name" pattern="^[A-Za-z\u0080-\uFFFF ']+$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required />
      </div>
      <div>
        <label htmlFor="userEmail">Email</label>
        <input id="userEmail" minLength="3" type="email" name="email" required />
      </div>
      <div>
        <label htmlFor="userPassword">Password</label>
        <input id="userPassword" autoComplete="false" minLength="7" type="password" name="password" required />
      </div>
      <button type="submit">Submit</button>
    </StyledForm>
  )
}
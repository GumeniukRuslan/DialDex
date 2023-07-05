export const SignUp = () => {
  return (
    <form>
      <div>
        <label htmlFor="userName">Name</label>
        <input id="userName" minlength="3" maxlength="20" type="text" name="name" pattern="^[A-Za-z\u0080-\uFFFF ']+$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required />
      </div>
      <div>
        <label htmlFor="userEmail">Email</label>
        <input id="userEmail" minlength="3" maxlength="20" type="email" name="email" required />
      </div>
      <div>
        <label htmlFor="userPassword">Password</label>
        <input id="userPassword" minlength="3" maxlength="20" type="password" name="password" required />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}
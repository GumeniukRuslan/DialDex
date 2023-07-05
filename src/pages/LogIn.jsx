export const LogIn = () => {
  return (
    <form>
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
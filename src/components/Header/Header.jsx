import { NavLink } from "react-router-dom"

export const Header = () => {
  return (
    <header>
      <ul>
        <li><NavLink to='/registration'>Sign up</NavLink></li>
        <li><NavLink to='/log-in'>Log in</NavLink></li> 
      </ul>
    </header>
  )
}
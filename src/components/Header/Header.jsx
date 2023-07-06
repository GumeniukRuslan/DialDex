import { useDispatch, useSelector } from "react-redux"
import { NavLink } from "react-router-dom"
import { logOutThunk } from "redux/auth/thunk"

export const Header = () => {
  const logInCheck = useSelector(state => state.auth.isLoggedIn)
  const dispatch = useDispatch()

  return (
    <header>
      {logInCheck
        ? <><NavLink to='/phone-book'>book</NavLink><button onClick={()=> dispatch(logOutThunk())}>log out</button></>
        : <ul>
            <li><NavLink to='/registration'>Sign up</NavLink></li>
            <li><NavLink to='/log-in'>Log in</NavLink></li> 
         </ul>
      }
    </header>
  )
}
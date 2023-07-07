import { useDispatch, useSelector } from "react-redux"
import { logOutThunk } from "redux/auth/thunk"
import { AuthHeaderWrapper, HeaderContainer, LogOutBtn, NavList, NavStylesLink, StyledHeader, StyledLink } from "./header.styled"
import Lottie from 'lottie-react';
import animationData from '../../lottie/mobile.json';


export const Header = () => {
  const logInCheck = useSelector(state => state.auth.isLoggedIn)
  const dispatch = useDispatch()

  return (
    <StyledHeader>
      <HeaderContainer>
        <StyledLink to='/'>
          <Lottie animationData={animationData} style={{ width: '25%', height: '25%' }} />
          <h1>DialDex</h1>
        </StyledLink>
      
      {logInCheck
        ? <AuthHeaderWrapper>
            <NavStylesLink to='/phone-book'>Phone book</NavStylesLink>
            <LogOutBtn onClick={() => dispatch(logOutThunk())}>Log out</LogOutBtn>
          </AuthHeaderWrapper>
        : <NavList>
            <li><NavStylesLink to='/registration'>Sign up</NavStylesLink></li>
            <li><NavStylesLink to='/log-in'>Log in</NavStylesLink></li> 
         </NavList>
      }
      </HeaderContainer>
      
    </StyledHeader>
  )
}
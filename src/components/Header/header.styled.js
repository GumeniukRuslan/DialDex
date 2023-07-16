import { Link, NavLink } from 'react-router-dom';
import { styled } from 'styled-components';
import Lottie from 'lottie-react';

export const StyledHeader = styled.header`
  background-color: rgba(255, 255, 255, 0.908);
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.2);
  margin-bottom: 25px;
  @media screen and (max-width: 520px) {
    padding: 20px 10px;
  }
  @media screen and (max-width: 230px) {
    padding: 10px 5px 20px 5px;
  }
`;
export const HeaderContainer = styled.div`
  padding: 0px 20px;
  justify-content: space-between;

  width: 100%;
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 0 auto;
  max-width: 1400px;
  @media screen and (min-width: 380px) {
    padding-left: 15px;
    padding-right: 15px;
    gap: 15px;
  }
  @media screen and (max-width: 270px) {
    flex-direction: column;
  }
`;
export const NavList = styled.ul`
  display: flex;
  justify-content: center;
  gap: 10px;
  @media screen and (min-width: 300px) {
    gap: 20px;
  }
`;
export const StyledLink = styled(Link)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: #4caf50;
  h1 {
    
    font-size: 22px;
    font-family: sans-serif Georgia, Times, 'Times New Roman';
    @media screen and (min-width: 660px) {
    margin-left: -20px;
    }
  }
`;
export const AuthHeaderWrapper = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;
export const NavStylesLink = styled(NavLink)`
  background-color: #4caf50;
  padding: 8px;
  border: none;
  border-radius: 4px;
  color: rgba(255, 255, 255, 0.908);
  white-space: nowrap;
  cursor: pointer;
  font-size: 12px;
  transition: background-color 300ms cubic-bezier(0.175, 0.885, 0.32, 1.275) 0s,
    color 300ms cubic-bezier(0.175, 0.885, 0.32, 1.275) 0s;
  &:hover,
  &:focus {
    background-color: #378439;
  }
  &.active {
    color: #4caf50;
    background-color: rgba(255, 255, 255, 0.908);
    border: 1px solid gray;
    &:hover,
    &:focus {
      background-color: #378439;
      color: rgba(255, 255, 255, 0.908);
    }
  }
  @media screen and (min-width: 520px) {
    font-size: 16px;
    padding: 10px;
  }
`;

export const LogOutBtn = styled.button`
  background-color: #4caf50;
  padding: 8px;
  border: none;
  white-space: nowrap;
  border-radius: 4px;
  color: rgba(255, 255, 255, 0.908);
  cursor: pointer;
  font-size: 12px;
  transition: background-color 300ms cubic-bezier(0.175, 0.885, 0.32, 1.275) 0s;
  &:hover,
  &:focus {
    background-color: #378439;
  }
  @media screen and (min-width: 520px) {
    font-size: 16px;
    padding: 10px;
  }
`;
export const StyledLottie = styled(Lottie)`
@media screen and (max-width: 520px) {
    display: none;
  }
  
`;
export const Greetings = styled.div`
span{
  @media screen and (max-width: 799px) {
    display: none;
  }
}
@media screen and (max-width: 400px) {
    display: none;
  }
  
`;

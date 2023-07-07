import { Link, NavLink } from 'react-router-dom';
import { styled } from 'styled-components';

export const StyledHeader = styled.header`
  background-color: rgba(255, 255, 255, 0.908);
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.2);
  margin-bottom: 25px;
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
`;
export const NavList = styled.ul`
  display: flex;
  justify-content: center;
  gap: 20px;
`;
export const StyledLink = styled(Link)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: #4caf50;
  h1 {
    margin-left: -20px;
    font-size: 22px;
    font-family: sans-serif Georgia, Times, 'Times New Roman';
  }
`;
export const AuthHeaderWrapper = styled.ul`
  display: flex;
  justify-content: center;
  gap: 20px;
`;
export const NavStylesLink = styled(NavLink)`
  background-color: #4caf50;
  padding: 10px;
  border: none;
  border-radius: 4px;
  color: rgba(255, 255, 255, 0.908);
  cursor: pointer;
  font-size: 16px;
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
`;

export const LogOutBtn = styled.button`
  background-color: #4caf50;
  padding: 10px;
  border: none;
  border-radius: 4px;
  color: rgba(255, 255, 255, 0.908);
  cursor: pointer;
  font-size: 16px;
  transition: background-color 300ms cubic-bezier(0.175, 0.885, 0.32, 1.275) 0s;
  &:hover,
  &:focus {
    background-color: #378439;
  }
`;

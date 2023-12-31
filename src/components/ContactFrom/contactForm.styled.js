import { styled } from 'styled-components';
import { MdOutlineContacts } from 'react-icons/md';

export const StyledForm = styled.form`
  background-color: #ffffff;
  padding: 15px;
  border-radius: 15px;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
  margin: 0 auto;
  width: 90%;

  @media screen and (min-width: 600px) {
    width: 600px;
    padding: 30px;
  }

  div {
    margin-bottom: 25px;
  }

  label {
    display: block;
    margin-bottom: 10px;
    color: #333333;
    font-size: 18px;
    font-weight: 600;
  }

  input {
    width: 100%;
    padding: 10px;
    font-size: 16px;
    color: #333;
    box-sizing: border-box;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;

    margin: auto;
    padding: 10px;
    border-radius: 5px;
    border: none;
    background-color: #4caf50;
    color: white;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    &:hover,
    &:focus {
      background-color: #378439;
    }
    @media screen and (max-width: 230px) {
    padding: 5px;
    font-size: 12px;
  }
  }
`;
export const NavList = styled.ul`
  display: flex;
  justify-content: center;
  gap: 20px;
`;
export const ContactIcon = styled(MdOutlineContacts)`
  fill: white;
  width: 18px;
  height: 18px;
  margin-right: 5px;
`;

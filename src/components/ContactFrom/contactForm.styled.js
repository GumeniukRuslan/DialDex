import { styled } from 'styled-components';

export const StyledForm = styled.form`
  width: 600px;
  background-color: #ffffff;
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
  margin: 0 auto;

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
    border-radius: 5px;
    border: 1px solid #ddd;
    font-size: 16px;
    color: #333;
    box-sizing: border-box;
  }

  button {
    display: block;
    width: 30%;
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
  }
`;
export const NavList = styled.ul`
  display: flex;
  justify-content: center;
  gap: 20px;
`;

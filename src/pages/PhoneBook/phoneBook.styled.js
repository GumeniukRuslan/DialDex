import { styled } from 'styled-components';

export const PhoneBookWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  justify-content: center;
  align-items: center;
`;

export const Reminder = styled.p`
  background-color: rgba(255, 255, 255, 0.908);
  padding: 20px 40px;
  border-radius: 8px;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
`;
export const ContactsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  align-items: center;
  width: 90%;
  background-color: rgba(255, 255, 255, 0.908);
  padding: 20px 40px;
  border-radius: 8px;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);

  @media screen and (min-width: 600px) {
    width: 600px;
  }

  h2 {
    text-align: center;
  }

  label {
    display: block;
    align-self: flex-start;
  }

  input {
    width: 100%;
    padding: 10px;
    border: 1px solid #4caf50;
    border-radius: 8px;
    color: #333;
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 5px;
    align-items: flex-start;
    justify-content: flex-start;
    width: 100%;
  }
  li {
    width: 100%;
    background-color: #f8f8f8;
    border: 1px solid #ddd;
    border-radius: 4px;
    padding: 10px 15px;
    margin-bottom: 10px;
    font-size: 18px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media screen and (max-width: 305px) {
      flex-direction: column;
      gap: 5px;
    } 
  }

  button {
    border: none;
    background-color: red;
    color: white;
    padding: 5px 10px;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  button:hover {
    background-color: darkred;
  }
`;

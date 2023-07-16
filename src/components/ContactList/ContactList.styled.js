import { styled } from 'styled-components';
import { BsTrash } from 'react-icons/bs';

export const StyledContact = styled.div`
 @media screen and (max-width: 305px) {
    display: flex;
    flex-direction: column;
    gap: 5px;
  } 
`;
export const ContactNumber = styled.a`
  
  transition: color 0.3s ease;

  &:hover {
    color: #4caf50;
  }
  @media screen and (min-width: 306px) {
    margin-left: 5px;
  } 
`;

export const DelBtn = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;

export const DelIcon = styled(BsTrash)`
  fill: white;
  width: 18px;
  height: 18px;
`;

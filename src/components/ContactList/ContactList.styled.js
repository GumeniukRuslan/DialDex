import { styled } from 'styled-components';
import { BsTrash } from 'react-icons/bs';

export const ContactNumber = styled.a`
  margin-left: 5px;
  transition: color 0.3s ease;

  &:hover {
    color: #4caf50;
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

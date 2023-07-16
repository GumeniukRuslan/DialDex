import { styled } from 'styled-components';
import Lottie from 'lottie-react';


export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 70px;
  @media screen and (max-width: 500px) {
    flex-direction: column;
    margin-top: 30px;
  }
`;

export const StyledHomeLottie = styled(Lottie)`
  width: 80%;
  height: 80%;
  @media screen and (min-width: 500px) {
    width: 30%;
    height: 30%;
  }
  
`;



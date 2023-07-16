
import animationData from '../../lottie/chat.json';
import { StyledHomeLottie, Wrapper } from "./Home.styled";
import { motion } from "framer-motion";


const variants = {
  swing: {
    rotate: [-10, 10, -10, 10, -10, 10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      repeatType: "mirror",
      delay: 0.5,
    },
  },
};

export const Home = () => {
  return (
    <Wrapper>
      <StyledHomeLottie animationData={animationData}/>
      <motion.h1 variants={variants} initial="swing" animate="swing">
        Make a call
      </motion.h1>
    </Wrapper>
    
  )
}
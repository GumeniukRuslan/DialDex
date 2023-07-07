import Lottie from 'lottie-react';
import animationData from '../../lottie/chat.json';
import { Wrapper } from "./Home.styled";
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
      <Lottie animationData={animationData} style={{ width: '25%', height: '25%' }} />
      <motion.h1 variants={variants} initial="swing" animate="swing">
        Make a call
      </motion.h1>
    </Wrapper>
    
  )
}
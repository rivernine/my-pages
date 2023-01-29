import React, { useState, useEffect, useRef } from 'react';
import { Box, IconButton } from "@chakra-ui/react";
import background from "../assets/background.jpg";
import { FaAngleDown } from 'react-icons/fa';
import Intro from './About/Intro';
import HorizontalTabs from './About/HorizontalTabs';

export default function About({ AboutFunc }) {
  const aboutRef = useRef(null)
  const gotoScroll = () => {
    aboutRef.current?.scrollIntoView({ behavior: 'smooth' });
  }

  useEffect(() => {
    AboutFunc.gotoScroll = gotoScroll
  }, [])

  return (<>
    <Box w="100%" h="100vh" bgColor="blue.300"
      bgImage={`url(${background})`} bgRepeat="no-repeat" bgSize={"cover"}
      justifyContent="center" alignItems={"center"} display="flex"
    >
      <Intro />
      <IconButton
        // variant='outline'
        colorScheme='orange'
        aria-label='down'
        icon={<FaAngleDown />}

        position="absolute"
        borderRadius={"full"}
        cursor={"pointer"}
        mt="90vh"
        onClick={gotoScroll}
      />
    </Box>
    <Box ref={aboutRef} w="100%" h="500px" bgColor="#0f1218"
      justifyContent="center" alignItems={"center"} display="flex"
    >
      <HorizontalTabs />
    </Box>
  </>
  );
}
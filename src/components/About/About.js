import React, { useEffect, useRef } from 'react';
import { Box, IconButton, useMediaQuery } from "@chakra-ui/react";
import background from "../../assets/background-4k.jpg";
import { FaAngleDown } from 'react-icons/fa';
import Intro from './Intro';
import HorizontalTabs from './HorizontalTabs';
import VerticalTabs from './VerticalTabs';

export default function About({ AboutFunc }) {

  const [isLargerThan1000] = useMediaQuery('(min-width: 1000px)')

  const aboutRef = useRef(null)
  const gotoScroll = () => {
    aboutRef.current?.scrollIntoView({ behavior: 'smooth' });
  }

  useEffect(() => {
    AboutFunc.gotoScroll = gotoScroll
  })

  return (<>
    <Box w="100%" h="100vh"
      bgImage={`url(${background})`} bgRepeat="no-repeat" bgSize={"cover"}
      justifyContent="center" alignItems={"center"} display="flex"
    >
      <Intro />
      <IconButton
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
    <Box ref={aboutRef} w="100%" h={isLargerThan1000 ? "500px" : "auto"} bgColor="#0f1218"
      justifyContent="center" alignItems={"center"} display="flex"
    >
      {
        isLargerThan1000 ?
          <HorizontalTabs /> :
          <VerticalTabs />
      }
    </Box>
  </>
  );
}
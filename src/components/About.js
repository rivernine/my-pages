import React, { useState, useEffect, useRef } from 'react';
import { useColorModeValue, useMediaQuery, HStack, Text, Box, VStack, Grid, GridItem, Image, Avatar, Flex, Spacer } from "@chakra-ui/react";
import background from "../assets/background.jpg";
import antsound from "../assets/antsound.ico";
import teenblur from "../assets/teenblur.png";
import profile from "../assets/profile.jpg";
import { FaGithub, FaMobileAlt, FaRegAddressCard, FaRegBuilding, FaRegKeyboard, FaGraduationCap, FaRegStar } from 'react-icons/fa';
import Intro from './About/Intro';
import AboutMe from './About/AboutMe';

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
    </Box>
    <Box ref={aboutRef} w="100%" h="500px" bgColor="gray.800"
      justifyContent="center" alignItems={"center"} display="flex"
    >
      <AboutMe />
    </Box>
  </>
  );
}
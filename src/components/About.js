import React, { useState, useEffect } from 'react';
import { useColorModeValue, useMediaQuery, HStack, Text, Box, VStack, Grid, GridItem, Image, Avatar, Flex, Spacer } from "@chakra-ui/react";
import background from "../assets/background.jpg";
import antsound from "../assets/antsound.ico";
import teenblur from "../assets/teenblur.png";
import profile from "../assets/profile.jpg";
import { FaGithub, FaMobileAlt, FaRegAddressCard, FaRegBuilding, FaRegKeyboard, FaGraduationCap, FaRegStar } from 'react-icons/fa';
import Intro from './About/Intro';
import AboutMe from './About/AboutMe';

export default function About() {
  // const bg = useColorModeValue('linear(rgb(248, 250, 253), rgba(248, 250, 253, 10))', 'linear(rgb(34, 37, 49), rgba(34, 37, 49, 10))')
  const bg = useColorModeValue('#091C7E', '#1a202c')
  const [isLargerThan900] = useMediaQuery('(min-width: 900px)')
  const [isLargerThan1400] = useMediaQuery('(min-width: 1400px)')

  return (<>
    <Box w="100%" h="100vh" bgColor="blue.300"
      bgImage={`url(${background})`} bgRepeat="no-repeat" bgSize={"cover"}
      justifyContent="center" alignItems={"center"} display="flex"
    >
      <Intro />
    </Box>
    <Box w="100%" h="500px" bgColor="gray.800"
      justifyContent="center" alignItems={"center"} display="flex"
    >
      <AboutMe />
    </Box>
  </>
  );
}
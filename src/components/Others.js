import React, { useState, useEffect, useRef } from 'react';
import { useColorModeValue, useMediaQuery, HStack, Text, Box, VStack, Flex, Grid, GridItem, Divider } from "@chakra-ui/react";
import { FaCircle } from 'react-icons/fa';
import Side1 from './Others/Side1';
import Side2 from './Others/Side2';
import Side3 from './Others/Side3';

export default function Others({ OthersFunc }) {

  const othersRef = useRef(null)
  const gotoScroll = () => {
    othersRef.current?.scrollIntoView({ behavior: 'smooth' });
  }

  useEffect(() => {
    OthersFunc.gotoScroll = gotoScroll
  }, [])

  return (<>
    <Box id="others" ref={othersRef} w="100%" py="100px"
      justifyContent={"center"} alignItems="center" display="flex"
      bgColor="#0f1218">
      <Side1 />
    </Box>
    <Box w="100%" py="100px"
      justifyContent={"center"} alignItems="center" display="flex"
      bgColor="#0f1218">
      <Side2 />
    </Box>
    <Box w="100%" py="100px"
      justifyContent={"center"} alignItems="center" display="flex"
      bgColor="#0f1218">
      <Side3 />
    </Box>
  </>
  );
}
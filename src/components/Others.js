import React, { useState, useEffect, useRef } from 'react';
import { useColorModeValue, useMediaQuery, HStack, Text, Box, VStack, Flex, Grid, GridItem, Divider } from "@chakra-ui/react";
import { FaCircle } from 'react-icons/fa';

export default function Others({ OthersFunc }) {

  const othersRef = useRef(null)
  // const gotoScroll = () => {
  //   othersRef.current?.scrollIntoView({ behavior: 'smooth' });
  // }

  // useEffect(() => {
  //   OthersFunc.gotoScroll = gotoScroll
  // }, [])

  return (<>
    <Box id="work" ref={othersRef} w="100%" py="100px"
      justifyContent={"center"} alignItems="center" display="flex"
      bgColor="tomato">
        <Box w="1000px" h="500px" bgColor="blue.100">

        </Box>
    </Box>
  </>
  );
}
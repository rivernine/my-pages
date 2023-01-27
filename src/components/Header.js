import React, { useState, useEffect } from 'react';
import { useColorModeValue, useMediaQuery, HStack, Text, } from "@chakra-ui/react";

export default function Header() {
  // const bg = useColorModeValue('linear(rgb(248, 250, 253), rgba(248, 250, 253, 10))', 'linear(rgb(34, 37, 49), rgba(34, 37, 49, 10))')
  const bg = useColorModeValue('#091C7E', '#1a202c')
  const [isLargerThan900] = useMediaQuery('(min-width: 900px)')
  const [isLargerThan1400] = useMediaQuery('(min-width: 1400px)')
  const [headerInfo, setHeaderInfo] = useState({})

  return (<>
    <HStack w="100%" h="50px" mt="0px" spacing={"20px"} position="fixed" zIndex={"overlay"}
      backdropFilter="auto" backdropBlur="sm" bgColor={"#00000030"}
      justifyContent={"center"} alignItems="center">
      <Text fontSize="md" fontWeight={700} color="orange.400">About</Text>
      <Text fontSize="md" fontWeight={700} color="white">Work</Text>
      <Text fontSize="md" fontWeight={700} color="white">Others</Text>
      <Text fontSize="md" fontWeight={700} color="white">Skills</Text>
    </HStack>
  </>
  );
}
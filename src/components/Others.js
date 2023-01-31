import React, { useEffect, useRef } from 'react';
import { Box, VStack } from "@chakra-ui/react";
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
  })

  return (<>
    <VStack spacing={0}>
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
    </VStack>
  </>
  );
}
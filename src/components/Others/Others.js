import React, { useEffect, useRef } from 'react';
import { Box, Divider, VStack, useMediaQuery } from "@chakra-ui/react";
import Side1 from './Side1';
import Side2 from './Side2';
import Side3 from './Side3';

export default function Others({ OthersFunc }) {

  const [isLargerThan850] = useMediaQuery('(min-width: 850px)')

  const othersRef = useRef(null)
  const gotoScroll = () => {
    othersRef.current?.scrollIntoView({ behavior: 'smooth' });
  }

  useEffect(() => {
    OthersFunc.gotoScroll = gotoScroll
  })

  return (<>
    <VStack py="100px" spacing={"20px"} bgColor="#0f1218">
      <Box id="others" ref={othersRef} w="100%"
        py={isLargerThan850 ? "100px" : "0px"}
        justifyContent={"center"} alignItems="center" display="flex">
        <Side1 />
      </Box>
      {
        isLargerThan850 ? null :
          <Divider bgColor={"#0f1218"} />
      }

      <Box w="100%"
        py={isLargerThan850 ? "100px" : "0px"}
        justifyContent={"center"} alignItems="center" display="flex">
        <Side2 />
      </Box>

      {
        isLargerThan850 ? null :
          <Divider bgColor={"#0f1218"} />
      }

      <Box w="100%"
        py={isLargerThan850 ? "100px" : "0px"}
        justifyContent={"center"} alignItems="center" display="flex">
        <Side3 />
      </Box>
    </VStack>
  </>
  );
}
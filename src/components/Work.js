import React, { useState, useEffect } from 'react';
import { useColorModeValue, useMediaQuery, HStack, Text, Box, VStack, Flex, Grid, GridItem } from "@chakra-ui/react";

export default function Work() {
  const bg = useColorModeValue('#091C7E', '#1a202c')
  const [isLargerThan900] = useMediaQuery('(min-width: 900px)')
  const [isLargerThan1400] = useMediaQuery('(min-width: 1400px)')
  const [headerInfo, setHeaderInfo] = useState({})

  return (<>
    <Box w="100%" bgColor="white"
      justifyContent={"center"} alignItems="center" display="flex">
      <Flex w="100%" maxWidth="1000px" h="300px">
        <Grid w="100%" templateColumns='repeat(10, 1fr)' gap={4}>
          <GridItem colSpan={3} bgColor="tomato"></GridItem>
          <GridItem colSpan={7} bgColor="tomato"></GridItem>
        </Grid>
        {/* <HStack w="100%" h="300px">
          <Flex w="30%">
            <Box borderBottomWidth={2} borderBottomColor="orange.400">
              <Text fontSize={"2xl"} fontWeight="700" color="black">Token As a Service</Text>
            </Box>
            <Text fontSize={"2xl"} fontWeight="700" color="gray.500">2022.12 ~ 현재</Text>
          </Flex>
          <Flex w="70%" h="300px" bgColor="aqua">

          </Flex>
        </HStack> */}
      </Flex>
    </Box>
  </>
  );
}
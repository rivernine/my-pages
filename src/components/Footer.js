import React from 'react';
import { Box, Text, IconButton, VStack } from "@chakra-ui/react";
import { FaAngleUp } from 'react-icons/fa';

export default function Footer() {

  return (<>
    <Box id="footer" w="100%" h="200px" py="50px"
      justifyContent={"center"} alignItems="center" display="flex"
      position="relative"
      bgColor="#0f1218">
      <VStack>
        <Text color="white" fontWeight={700} ><span style={{ color: "#ED8936" }}>강재구</span> - againine@gmail.com</Text>
        <Text color="#666666" fontSize={"sm"} fontWeight={400} >Last updated: 2023-01-31</Text>
      </VStack>
      <IconButton
        variant='outline'
        colorScheme='orange'
        aria-label='up'
        icon={<FaAngleUp />}

        position="absolute"
        borderRadius={"full"}
        cursor={"pointer"}
        top={0}
        onClick={() => {
          window.scrollTo({
            top: 0,
            behavior: 'smooth'
          })
        }}
      />
    </Box>
  </>
  );
}
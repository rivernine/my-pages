import React, { useState, useEffect, useRef } from 'react';
import { useColorModeValue, useMediaQuery, VStack, Text, Box } from "@chakra-ui/react";
import Header from './components/Header';
import About from './components/About';
import Work from './components/Work';
import Others from './components/Others';

function App() {

  const AboutFunc = useRef(null)
  const WorkFunc = useRef(null)
  const OthersFunc = useRef(null)

  return (<>
    <Box bgColor={"black"} spacing="0px">
      <Header AboutFunc={AboutFunc} WorkFunc={WorkFunc} />
      <About AboutFunc={AboutFunc} />
      <Work WorkFunc={WorkFunc} />
      <Others WorkFunc={OthersFunc} />
    </Box>
  </>
  );
}

export default App;

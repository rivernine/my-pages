import React, { useState, useEffect } from 'react';
import { useColorModeValue, useMediaQuery, VStack, Text, Box } from "@chakra-ui/react";
import Header from './components/Header';
import About from './components/About';
import Work from './components/Work';


function App() {
  // const bg = useColorModeValue('linear(rgb(248, 250, 253), rgba(248, 250, 253, 10))', 'linear(rgb(34, 37, 49), rgba(34, 37, 49, 10))')
  const bg = useColorModeValue('#091C7E', '#1a202c')
  const [isLargerThan900] = useMediaQuery('(min-width: 900px)')
  const [isLargerThan1400] = useMediaQuery('(min-width: 1400px)')
  const [headerInfo, setHeaderInfo] = useState({})

  return (<>
    <Box bgColor={"black"} spacing="0px">
      ㅅㄷㄴㅅ
      {/* <Header />
      <About />
      <Work /> */}
    </Box>
  </>
  );
}

export default App;

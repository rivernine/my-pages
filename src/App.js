import React, { useRef } from 'react';
import { Box } from "@chakra-ui/react";

import Header from './components/Header';
import About from './components/About';
import Work from './components/Work';
import Others from './components/Others';
import Skills from './components/Skills';
import Activity from './components/Activity';
import Footer from './components/Footer';

function App() {

  const AboutFunc = useRef(null)
  const WorkFunc = useRef(null)
  const OthersFunc = useRef(null)
  const SkillsFunc = useRef(null)

  return (<>
    <Box bgColor={"black"} spacing="0px">
      <Header
        AboutFunc={AboutFunc}
        WorkFunc={WorkFunc}
        OthersFunc={OthersFunc}
        SkillsFunc={SkillsFunc}
      />
      <About AboutFunc={AboutFunc} />
      <Work WorkFunc={WorkFunc} />
      <Others OthersFunc={OthersFunc} />
      <Skills SkillsFunc={SkillsFunc} />
      <Activity />
      <Footer />
    </Box>
  </>
  );
}

export default App;

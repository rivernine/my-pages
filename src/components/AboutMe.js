import React, { useRef } from 'react';
import { Box } from "@chakra-ui/react";

// import Header from './components/header/Header';
// import About from './components/about/About';
// import Work from './components/work/Work';
// import Others from './components/others/Others';
// import Skills from './components/skills/Skills';
// import Activity from './components/activity/Activity';
// import Footer from './components/footer/Footer';

function AboutMe() {

  const AboutFunc = useRef(null)
  const WorkFunc = useRef(null)
  const OthersFunc = useRef(null)
  const SkillsFunc = useRef(null)

  return (<>
    <Box bgColor={"blue"} w="100px" h="100px" spacing="0px">
      {/* <Header
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
      <Footer /> */}
    </Box>
  </>
  );
}

export default AboutMe;

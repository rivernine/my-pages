import React, { useRef } from 'react';
import { Box } from "@chakra-ui/react";

import Header from './header/Header';
import About from './about/About';
import Work from './work/Work';
import Others from './others/Others';
import Skills from './skills/Skills';
import Activity from './activity/Activity';
import Footer from './footer/Footer';

function Resume() {

  const AboutFunc = useRef(null)
  const WorkFunc = useRef(null)
  const OthersFunc = useRef(null)
  const SkillsFunc = useRef(null)

  return (<>
    <Box bgColor={"black"}>
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

export default Resume;

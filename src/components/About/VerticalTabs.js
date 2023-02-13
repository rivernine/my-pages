import React from 'react';
import { Divider, VStack } from "@chakra-ui/react";
import AboutMe from './AboutMe';
import AboutStudy from './AboutStudy';
import "./hideScrollbar.css";
import AboutSchedule from './AboutSchedule';

export default function VerticalTabs() {

  return (<>
    <VStack >
      <AboutMe />
      <Divider style={{marginTop: 30}}/>
      <AboutStudy />
      <Divider style={{marginTop: 30}}/>
      <AboutSchedule />
    </VStack>
  </>
  );
}
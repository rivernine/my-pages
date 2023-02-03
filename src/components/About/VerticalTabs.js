import React from 'react';
import { Divider, VStack } from "@chakra-ui/react";
import AboutMe from './AboutMe';
import AboutFreetime from './AboutFreetime';
import "./hideScrollbar.css";
import AboutSchedule from './AboutSchedule';

export default function VerticalTabs() {

  return (<>
    <VStack >
      <AboutMe />
      <Divider style={{marginTop: 30}}/>
      <AboutFreetime />
      <Divider style={{marginTop: 30}}/>
      <AboutSchedule />
    </VStack>
  </>
  );
}
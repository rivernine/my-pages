import React from 'react';
import { Divider, useMediaQuery, VStack } from "@chakra-ui/react";
import { ScrollMenu } from 'react-horizontal-scrolling-menu';
import { LeftArrow, RightArrow } from './Arrow';
import AboutMe from './AboutMe';
import AboutFreetime from './AboutFreetime';
import "./hideScrollbar.css";
import AboutSchedule from './AboutSchedule';

export default function VerticalTabs() {

  const [isLargerThan1200] = useMediaQuery('(min-width: 1200px)')
  const [isLargerThan1000] = useMediaQuery('(min-width: 1000px)')
  const [isLargerThan750] = useMediaQuery('(min-width: 750px)')

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
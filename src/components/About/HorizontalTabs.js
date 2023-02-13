import React from 'react';
import { useMediaQuery } from "@chakra-ui/react";
import { ScrollMenu } from 'react-horizontal-scrolling-menu';
import { LeftArrow, RightArrow } from './Arrow';
import AboutMe from './AboutMe';
import AboutStudy from './AboutStudy';
import "./hideScrollbar.css";
import AboutSchedule from './AboutSchedule';

export default function HorizontalTabs() {

  const [isLargerThan1200] = useMediaQuery('(min-width: 1200px)')

  return (<>
    <div style={{ width: isLargerThan1200 ? 1200 : 1000, height: 500 }}>
      <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow} >
        <AboutMe />
        <AboutStudy />
        <AboutSchedule />
      </ScrollMenu>
    </div>
  </>
  );
}
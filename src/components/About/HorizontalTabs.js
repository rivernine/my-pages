import React from 'react';
import { useMediaQuery } from "@chakra-ui/react";
import { ScrollMenu } from 'react-horizontal-scrolling-menu';
import { LeftArrow, RightArrow } from './Arrow';
import AboutMe from './AboutMe';
import AboutFreetime from './AboutFreetime';
import "./hideScrollbar.css";
import AboutSchedule from './AboutSchedule';

export default function HorizontalTabs() {

  const [isLargerThan1200] = useMediaQuery('(min-width: 1200px)')
  const [isLargerThan1000] = useMediaQuery('(min-width: 1000px)')
  const [isLargerThan750] = useMediaQuery('(min-width: 750px)')

  return (<>
    {
      isLargerThan1000 ?
        // <div style={{ width: isLargerThan1200 ? 1200 : "100%", height: 500 }}>
        <div style={{ width: isLargerThan1200 ? 1200 : 1000, height: 500 }}>
          <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow} >
            <AboutMe />
            <AboutFreetime />
            <AboutSchedule />
          </ScrollMenu>
        </div> :
        <>
          <AboutMe />
          {/* <AboutFreetime /> */}
          {/* <AboutSchedule /> */}
        </>
    }
  </>
  );
}
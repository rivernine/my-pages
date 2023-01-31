import React from 'react';

import { ScrollMenu } from 'react-horizontal-scrolling-menu';
import { LeftArrow, RightArrow } from './Arrow';
import AboutMe from './AboutMe';
import AboutFreetime from './AboutFreetime';
import "./hideScrollbar.css";
import AboutSchedule from './AboutSchedule';

export default function HorizontalTabs() {

  return (<>
    <div style={{ width: 1200, height: 500 }}>
      <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow} >
        <AboutMe />
        <AboutFreetime />
        <AboutSchedule />
      </ScrollMenu>
    </div>
  </>
  );
}
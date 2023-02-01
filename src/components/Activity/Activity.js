import React from 'react';
import { Box } from "@chakra-ui/react";
import CitySvg from './CitySvg';
import './CitySvg.scss';

export default function Activity() {

  return (<>
    <Box id="footer" w="100%" h="60vh" py="100px"
      justifyContent={"center"} alignItems="center" display="flex"
      bgColor="#0f1218">
      <div className="wrapper">
        <CitySvg />
      </div>
    </Box>
  </>
  );
}
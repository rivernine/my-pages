import React from "react";
import { IconButton, Flex } from "@chakra-ui/react";
import { VisibilityContext } from "react-horizontal-scrolling-menu";
import { FaAngleRight, FaAngleLeft } from 'react-icons/fa';

function Left({ onClick, disabled }) {
  return (
    <Flex alignItems={"center"} >
      <IconButton
        disabled={disabled}
        variant='outline'
        colorScheme={disabled ? "blackAlpha" : "orange"}
        aria-label='left'
        icon={<FaAngleLeft />}

        borderRadius={"full"}
        cursor={"pointer"}
        mr="50px"
        onClick={onClick}
      />
    </Flex>
  )
}

function Right({ onClick, disabled }) {
  return (
    <Flex alignItems={"center"}>
      <IconButton
        disabled={disabled}
        variant='outline'
        colorScheme={disabled ? "blackAlpha" : "orange"}
        aria-label='right'
        icon={<FaAngleRight />}

        borderRadius={"full"}
        cursor={"pointer"}
        ml="50px"
        onClick={onClick}
      />
    </Flex>
  )
}


export function LeftArrow() {
  const { scrollPrev, isFirstItemVisible } = React.useContext(VisibilityContext);
  return <Left disabled={isFirstItemVisible} onClick={() => scrollPrev()}></Left>;
}

export function RightArrow() {
  const { scrollNext, isLastItemVisible } = React.useContext(VisibilityContext);
  return <Right disabled={isLastItemVisible} onClick={() => scrollNext()}></Right>;
}
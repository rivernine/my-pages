import React, { useEffect, useState } from 'react';
import { HStack, Text, Flex, useMediaQuery } from "@chakra-ui/react";

export default function Header({
  AboutFunc,
  WorkFunc,
  OthersFunc,
  SkillsFunc
}) {

  const [isLargerThan1200] = useMediaQuery('(min-width: 1200px)')
  const [isLargerThan1000] = useMediaQuery('(min-width: 1000px)')
  const [isLargerThan750] = useMediaQuery('(min-width: 750px)')

  const [selected, setSelected] = useState(0)

  const listenScrollEvent = (e) => {
    const about = document.getElementById('about')
    const work = document.getElementById('work')
    const others = document.getElementById('others')
    const skills = document.getElementById('skills')
    const scrollY = window.scrollY

    const aboutPos = about ? Math.floor(scrollY + about.getBoundingClientRect().top) : 0
    const workPos = work ? Math.floor(scrollY + work.getBoundingClientRect().top) : 0
    const othersPos = others ? Math.floor(scrollY + others.getBoundingClientRect().top) : 0
    const skillsPos = skills ? Math.floor(scrollY + skills.getBoundingClientRect().top) : 0

    if (scrollY >= aboutPos && scrollY < workPos) {
      setSelected(0)
    } else if (scrollY >= workPos && scrollY < othersPos) {
      setSelected(1)
    } else if (scrollY >= othersPos && scrollY < skillsPos) {
      setSelected(2)
    } else {
      setSelected(3)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent)
  }, [])

  return (<>
    <HStack id="header" w="100%" h={isLargerThan750 ? "50px" : "40px"} spacing={"20px"} position="fixed" zIndex={"overlay"}
      backdropFilter="auto" backdropBlur="sm" bgColor={"#00000030"}
      justifyContent={"center"} alignItems="center">
      <Flex as={"button"} onClick={() => AboutFunc.gotoScroll()}>
        <Text fontSize={isLargerThan750 ? "md" : "sm"} fontWeight={700} color={selected === 0 ? "orange.400" : "white"}>About</Text>
      </Flex>
      <Flex as={"button"} onClick={() => WorkFunc.gotoScroll()}>
        <Text fontSize={isLargerThan750 ? "md" : "sm"} fontWeight={700} color={selected === 1 ? "orange.400" : "white"}>Work</Text>
      </Flex>
      <Flex as={"button"} onClick={() => OthersFunc.gotoScroll()}>
        <Text fontSize={isLargerThan750 ? "md" : "sm"} fontWeight={700} color={selected === 2 ? "orange.400" : "white"}>Others</Text>
      </Flex>
      <Flex as={"button"} onClick={() => SkillsFunc.gotoScroll()}>
        <Text fontSize={isLargerThan750 ? "md" : "sm"} fontWeight={700} color={selected === 3 ? "orange.400" : "white"}>Skills</Text>
      </Flex>
    </HStack>
  </>
  );
}
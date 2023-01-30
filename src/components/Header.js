import React, { useEffect, useState } from 'react';
import { useColorModeValue, useMediaQuery, HStack, Text, Flex } from "@chakra-ui/react";

export default function Header({ AboutFunc, WorkFunc, OthersFunc }) {

  const [selected, setSelected] = useState(0)

  const listenScrollEvent = (e) => {
    const about = document.getElementById('about')
    const work = document.getElementById('work')
    const others = document.getElementById('others')
    const scrollY = window.scrollY

    const aboutPos = about ? Math.floor(scrollY + about.getBoundingClientRect().top) : 0
    const workPos = work ? Math.floor(scrollY + work.getBoundingClientRect().top) : 0
    const othersPos = others ? Math.floor(scrollY + others.getBoundingClientRect().top) : 0

    if (scrollY >= aboutPos && scrollY < workPos) {
      setSelected(0)
    } else if (scrollY >= workPos && scrollY < othersPos) {
      setSelected(1)
    } else {
      setSelected(2)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent)
  }, [])

  return (<>
    <HStack id="header" w="100%" h="50px" mt="0px" spacing={"20px"} position="fixed" zIndex={"overlay"}
      backdropFilter="auto" backdropBlur="sm" bgColor={"#00000030"}
      justifyContent={"center"} alignItems="center">
      <Flex as={"button"} onClick={() => AboutFunc.gotoScroll()}>
        <Text fontSize="md" fontWeight={700} color={selected === 0 ? "orange.400" : "white"}>About</Text>
      </Flex>
      <Flex as={"button"} onClick={() => WorkFunc.gotoScroll()}>
        <Text fontSize="md" fontWeight={700} color={selected === 1 ? "orange.400" : "white"}>Work</Text>
      </Flex>
      <Flex as={"button"} onClick={() => OthersFunc.gotoScroll()}>
        <Text fontSize="md" fontWeight={700} color="white">Others</Text>
      </Flex>
      <Text fontSize="md" fontWeight={700} color="white">Skills</Text>
    </HStack>
  </>
  );
}
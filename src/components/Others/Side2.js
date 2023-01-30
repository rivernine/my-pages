import React, { useState, useEffect, useRef } from 'react';
import { useColorModeValue, useMediaQuery, HStack, Text, Box, VStack, Flex, Grid, GridItem, Image, Spacer, Button, ArrowFor } from "@chakra-ui/react";
import { FaCircle, FaLink } from 'react-icons/fa';
import antsoundIntro from '../../assets/antsound-intro.png'

export default function Side2({ OthersFunc }) {

  // const gotoScroll = () => {
  //   othersRef.current?.scrollIntoView({ behavior: 'smooth' });
  // }

  // useEffect(() => {
  //   OthersFunc.gotoScroll = gotoScroll
  // }, [])

  return (<>
    <Box w="1000px" h="500px">
      <Box display="flex" position="relative">
        <Image src={antsoundIntro} style={{ width: 750, height: "auto", right: 0, position: "absolute" }} borderLeftRadius="30px" shadow={4} zIndex={0} />
        <Box w="600px" h="360px" bgColor={"#191e28"} mt="80px"
          position="absolute" borderRadius={"30px"} p="40px" >
          <Text fontSize="sm" fontWeight="400" color="#AAAAAA">코인과 단어의 상관계수 분석 사이트</Text>
          <Text fontSize={"2xl"} fontWeight="700" color="white">
            <span style={{ color: "#ED8936" }}>개</span>
            미소리
          </Text>
          <Text fontWeight="400" color="#AAAAAA">
            코인과 단어의 상관계수를 통해 새로운 인사이트를 얻고자 개발한 웹사이트
          </Text>
          <VStack h="170px" mt="40px" alignItems={"start"}>
            <Flex mb="4px" alignItems={"center"}>
              <FaCircle color="#ED8936" size="10" style={{ marginRight: 10 }} />
              <Text color="#FFFFFF">디자인 퍼블리싱 및 React.js를 사용하여 PC / Mobile 반응형 웹 개발</Text>
            </Flex>
            <Flex mb="4px" alignItems={"center"}>
              <FaCircle color="#ED8936" size="10" style={{ marginRight: 10 }} />
              <Text color="#FFFFFF">10개의 크롤러와 9개의 ETL 배치 서비스를 안정적으로 스케줄링</Text>
            </Flex>
            <Flex mb="4px" alignItems={"center"}>
              <FaCircle color="#ED8936" size="10" style={{ marginRight: 10 }} />
              <Text color="#FFFFFF">Pandas와 mecab을 활용하여 Text mining & 상관계수 분석 구현 </Text>
            </Flex>
            <Spacer />
            <Button alignSelf={"end"} leftIcon={<FaLink />} colorScheme={"orange"}
              onClick={() => window.open('http://antsound.me', '_blank')}>
              ENTER
            </Button>
          </VStack>
        </Box>
      </Box>
    </Box>
  </>
  );
}
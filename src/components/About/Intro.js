import React from 'react';
import { HStack, Text, Box, VStack, Avatar, Flex, Tooltip, useMediaQuery } from "@chakra-ui/react";
import antsound from "../../assets/antsound-logo.ico";
import teenblur from "../../assets/teenblur-logo.png";
import { FaGithub, } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';

export default function Intro() {

  const [isLargerThan1200] = useMediaQuery('(min-width: 1200px)')
  const [isLargerThan1000] = useMediaQuery('(min-width: 1000px)')
  const [isLargerThan750] = useMediaQuery('(min-width: 750px)')

  const renderTypeAnimation = () => {
    return (
      <HStack mb={isLargerThan1000 ? "20px" : "0px"}>
        <Text style={{
          fontSize: 12, fontWeight: 400, color: "#FFFFFF",
          fontFamily: 'GmarketSansMedium'
        }}>I build
          <TypeAnimation
            sequence={[
              ' back-end architecture.',
              2000,
              ' blockchain service.',
              2000,
              ' RESTful server.',
              2000,
              ' automation tools.',
              2000,
              ' monitoring system.',
              2000,
              ' ETL service.',
              2000,
              ' CI/CD pipeline.',
              2000,
              ' backoffice.',
              2000,
              ' Android & iOS application.',
              2000,
              ' web application.',
              2000,
            ]}
            speed={40}
            style={{
              fontSize: 12, fontWeight: 800, color: "#ED8936",
              fontFamily: 'GmarketSansMedium'
            }}
            wrapper="span"
            repeat={Infinity}
          />
        </Text>
      </HStack>
    )
  }

  const renderIcons = () => {
    return (
      <HStack>
        <Tooltip label="깃허브">
          <a href="https://github.com/rivernine" target="_blank" rel="noreferrer">
            <FaGithub style={{ color: "white", width: 23, height: 23 }} />
          </a>
        </Tooltip>
        <Tooltip label="틴블러">
          <a href="https://teenblur.com" target="_blank" rel="noreferrer" >
            <Avatar style={{ width: 25, height: 25 }} name='Teenblur' src={teenblur} />
          </a>
        </Tooltip>
        <Tooltip label="개미소리">
          <a href="http://antsound.me" target="_blank" rel="noreferrer" >
            <Avatar style={{ color: "white", width: 25, height: 25 }} name='Antsound' src={antsound} />
          </a>
        </Tooltip>
      </HStack>
    )
  }

  return (<>
    <Box w="100%" maxWidth={isLargerThan1200 ? "1000px" : isLargerThan1000 ? "800px" : "750px"}
      bgColor="#00000030" borderRadius={isLargerThan750 ? "30px" : "0px"}
      backdropFilter="auto" backdropBlur="sm" 
      display="flex" justifyContent="center" alignItems={"center"}
    >
      <VStack px={isLargerThan750 ?"50px" : "20px"} py="50px">
        <Flex flexDir="column" mb={isLargerThan1000 ? "50px" : "20px"}>
          {renderTypeAnimation()}
          {
            isLargerThan1000 ?
              <Text fontSize={"6xl"} fontWeight="900" color="white" mb="20px">안녕하세요. <span style={{ color: "#ED8936" }}>강재구</span>입니다.</Text> :
              <>
                <Text fontSize={"5xl"} fontWeight="900" color="white" mb="-20px">안녕하세요.</Text>
                <Text fontSize={"5xl"} fontWeight="900" color="white" mb="20px"><span style={{ color: "#ED8936" }}>강재구</span>입니다.</Text>
              </>
          }
          <Text fontSize={isLargerThan1000 ? "lg" : "md"} fontWeight={400} color="#FFFFFF">현재 블록체인 도메인에서 일하며 <span style={{ fontWeight: "800", color: "white" }}>블록체인 서비스 백엔드 개발</span>을 하고 있습니다.</Text>
          <Text fontSize={isLargerThan1000 ? "lg" : "md"} fontWeight={400} color="#FFFFFF">다양한 SI 프로젝트 경험을 기반으로 고가용성을 갖춘 확장형 백엔드 아키텍처를 설계합니다.</Text>
          <br />
          <Text fontSize={isLargerThan1000 ? "lg" : "md"} fontWeight={400} color="#FFFFFF">동작보다는 <span style={{ fontWeight: "800", color: "white" }}>데이터 중심의 프로그래밍</span>을 통해 최적화와 일관성을 고민하고, 코드리뷰 및 리팩토링에 많은 시간을 투자합니다.</Text>
        </Flex>
        {renderIcons()}
      </VStack>
    </Box>

  </>
  );
}
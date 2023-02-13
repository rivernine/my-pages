import React from 'react';
import { HStack, Text, Box, VStack, Grid, GridItem, Avatar, Flex, useMediaQuery } from "@chakra-ui/react";
import { FaChartBar, FaRobot, } from 'react-icons/fa';
import github from '../../assets/github.png'
import teenblur from "../../assets/teenblur-logo.png";
import antsound from "../../assets/antsound-logo.ico";
import { TypeAnimation } from 'react-type-animation';

export default function AboutStudy() {

  const [isLargerThan1200] = useMediaQuery('(min-width: 1200px)')
  const [isLargerThan1000] = useMediaQuery('(min-width: 1000px)')

  const renderTypeAnimation = () => {
    return (
      <HStack mt={isLargerThan1200 ? "20px" : "10px"} alignSelf={"flex-end"}>
        <Text style={{
          fontSize: isLargerThan1200 ? 12 : 11, fontWeight: 400, color: "#FFFFFF",
          fontFamily: 'GmarketSansMedium'
        }}>
          <TypeAnimation
            sequence={[
              'React',
              2000,
              'React-Native',
              2000,
              'Firebase Cloud Messaging',
              2000,
              'OAuth & JWT',
              2000,
              'ETL',
              2000,
              'Push Notification',
              2000,
              'Web/Mobile App Service Architecture',
              2000,
              'React Hook',
              2000,
              'Pymysql & Pandas',
              2000,
            ]}
            speed={40}
            style={{
              fontSize: isLargerThan1200 ? 12 : 11, fontWeight: 800, color: "#ED8936",
              fontFamily: 'GmarketSansMedium'
            }}
            wrapper="span"
            repeat={Infinity}
          />
          을(를) 배웠어요!
        </Text>
      </HStack>
    )
  }

  const renderContentLargerThan1000 = () => {
    return (
      <Box h="500px" display="flex" px="10px"
        bgImage={`url(${github})`} bgRepeat="no-repeat" bgSize={"cover"}
        justifyContent="center" alignItems="center"
      >
        <Box h="500px" display="flex" px="10px"
          backdropFilter="auto" backdropBlur={"3px"}
          justifyContent="center" alignItems="center"
        >
          <Grid templateColumns='repeat(10, 1fr)' gap={4} px="60px">

            <GridItem colSpan={10}>
              <Flex flexDir={"column"}>
                <Text fontSize={"2xl"} fontWeight="700" color="white">About <span style={{ color: "#ED8936" }}>study</span></Text>
                <Text mt="15px" color="white" fontWeight={400}>
                  <span style={{ fontWeight: 700 }}>새로운 기술을 학습하는 것을 좋아합니다.</span> 업무환경에서 사용하지 않아 배울 수 없었던 기술들을 여가시간을 통해 스스로 학습합니다.
                  새로 학습한 기술 스택들을 다루기 위해 다양한 주제에 대해 브레인스토밍하여 아이디어를 도출하고 개발합니다.
                  2021년 4월부터 시작하여 지금까지 7개의 사이드 프로젝트를 진행한 바 있으며 2,300회 이상의 commit을 했습니다. (2023년 2월 기준)
                </Text>
                {renderTypeAnimation()}
                <HStack mt="30px" spacing="100px">
                  <VStack spacing="15px">

                    <Flex alignSelf={"start"} alignItems={"center"}>
                      <Avatar style={{ width: 17, height: 17, marginRight: 8 }} name='Teenblur' src={teenblur} />
                      <Text fontSize={"sm"} fontWeight={400} color="white">
                        <span style={{ fontWeight: 700 }}>틴블러.</span> 학생 전용 모바일 플랫폼
                      </Text>
                    </Flex>

                    <Flex alignSelf={"start"} alignItems={"center"}>
                      <Avatar style={{ width: 17, height: 17, marginRight: 8 }} name='Antsound' src={antsound} />
                      <Text fontSize={"sm"} fontWeight={400} color="white">
                        <span style={{ fontWeight: 700 }}>개미소리.</span> 코인 가격과 커뮤니티 언급 단어의 상관계수 분석 사이트
                      </Text>
                    </Flex>

                    <Flex alignSelf={"start"} alignItems={"center"}>
                      <FaChartBar style={{
                        size: 15,
                        color: "white",
                        marginRight: 8
                      }} />
                      <Text fontSize={"sm"} fontWeight={400} color="white">
                        <span style={{ fontWeight: 700 }}>Indexduck.</span> 외국인, 기관, 개인의 매매 동향과 주가와의 상관계수를 분석 및 랭킹 사이트
                      </Text>
                    </Flex>

                    <Flex alignSelf={"start"} alignItems={"center"}>
                      <FaRobot style={{
                        size: 15,
                        color: "white",
                        marginRight: 8
                      }} />
                      <Text fontSize={"sm"} fontWeight={400} color="white">
                        <span style={{ fontWeight: 700 }}>Ticker Picker.</span> 최적의 주식 트레이딩 전략 추천 및 자동 매매 봇
                      </Text>
                    </Flex>

                    <Flex alignSelf={"start"} alignItems={"center"}>
                      <FaRobot style={{
                        size: 15,
                        color: "white",
                        marginRight: 8
                      }} />
                      <Text fontSize={"sm"} fontWeight={400} color="white">
                        <span style={{ fontWeight: 700 }}>Crypto-Generator.</span> 업비트, 바이낸스 거래소의 코인 자동 매매 봇
                      </Text>
                    </Flex>

                  </VStack>
                </HStack>
              </Flex>
            </GridItem>
          </Grid>
        </Box>
      </Box>
    );
  }

  const renderContentSmallerThan1000 = () => {
    return (
      <VStack mt="20px">
        <Box display="flex"
          bgImage={`url(${github})`} bgRepeat="no-repeat" bgSize={"cover"}
        >
          <Box display="flex" px="20px"
            backdropFilter="auto" backdropBlur={"3px"}
          >

            <Flex flexDir={"column"}>
              <Text fontSize={"xl"} fontWeight="700" color="white">About <span style={{ color: "#ED8936" }}>study</span></Text>
              <Text fontSize={"sm"} mt="15px" color="white" fontWeight={400}>
                <span style={{ fontWeight: 700 }}>새로운 기술을 학습하는 것을 좋아합니다.</span> 업무환경에서 사용하지 않아 배울 수 없었던 기술들을 여가시간을 통해 스스로 학습합니다.
                새로 학습한 기술 스택들을 다루기 위해 다양한 주제에 대해 브레인스토밍하여 아이디어를 도출하고 개발합니다.
                2021년 4월부터 시작하여 지금까지 7개의 사이드 프로젝트를 진행한 바 있으며 2,300회 이상의 commit을 했습니다. (2023년 2월 기준)
              </Text>
              {renderTypeAnimation()}
              <HStack mt="30px" spacing="100px">
                <VStack spacing="15px">

                  <Flex alignSelf={"start"} alignItems={"center"}>
                    <Avatar style={{ width: 17, height: 17, marginRight: 8 }} name='Teenblur' src={teenblur} />
                    <Text fontSize={"xs"} fontWeight={400} color="white">
                      <span style={{ fontWeight: 700 }}>틴블러.</span> 학생 전용 모바일 플랫폼 (개발중)
                    </Text>
                  </Flex>

                  <Flex alignSelf={"start"} alignItems={"center"}>
                    <Avatar style={{ width: 17, height: 17, marginRight: 8 }} name='Antsound' src={antsound} />
                    <Text fontSize={"xs"} fontWeight={400} color="white">
                      <span style={{ fontWeight: 700 }}>개미소리.</span> 코인 가격과 커뮤니티 언급 단어의 상관계수 분석 사이트
                    </Text>
                  </Flex>

                  <Flex alignSelf={"start"} alignItems={"center"}>
                    <FaChartBar style={{
                      size: 15,
                      color: "white",
                      marginRight: 8
                    }} />
                    <Text fontSize={"xs"} fontWeight={400} color="white">
                      <span style={{ fontWeight: 700 }}>Indexduck.</span> 외국인, 기관, 개인의 매매 동향과 주가와의 상관계수를 분석 및 랭킹 사이트
                    </Text>
                  </Flex>

                  <Flex alignSelf={"start"} alignItems={"center"}>
                    <FaRobot style={{
                      size: 15,
                      color: "white",
                      marginRight: 8
                    }} />
                    <Text fontSize={"xs"} fontWeight={400} color="white">
                      <span style={{ fontWeight: 700 }}>Ticker Picker.</span> 최적의 주식 트레이딩 전략 추천 및 자동 매매 봇
                    </Text>
                  </Flex>

                  <Flex alignSelf={"start"} alignItems={"center"}>
                    <FaRobot style={{
                      size: 15,
                      color: "white",
                      marginRight: 8
                    }} />
                    <Text fontSize={"xs"} fontWeight={400} color="white">
                      <span style={{ fontWeight: 700 }}>Crypto-Generator.</span> 업비트, 바이낸스 거래소의 코인 자동 매매 봇
                    </Text>
                  </Flex>

                </VStack>
              </HStack>
            </Flex>
          </Box>
        </Box>
      </VStack>
    );
  }

  return (<>
    <Box w={isLargerThan1200 ? "1000px" : isLargerThan1000 ? "800px" : "100vw"}
      h={isLargerThan1000 ? "500px" : "auto"}
      px="10px" display="flex" alignItems={"center"}>
      {
        isLargerThan1000 ?
          renderContentLargerThan1000() :
          renderContentSmallerThan1000()
      }
    </Box>
  </>
  );
}
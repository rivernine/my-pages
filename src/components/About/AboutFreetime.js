import React from 'react';
import { HStack, Text, Box, VStack, Grid, GridItem, Avatar, Flex } from "@chakra-ui/react";
import { FaChartBar, FaRobot, } from 'react-icons/fa';
import github from '../../assets/github.png'
import teenblur from "../../assets/teenblur.png";
import antsound from "../../assets/antsound.ico";


export default function AboutFreetime() {

  return (<>
    <Box w="1000px" h="500px" px="10px" display="flex" alignItems={"center"}>
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
                <Text fontSize={"2xl"} fontWeight="700" color="white">About <span style={{ color: "#ED8936" }}>freetime</span></Text>
                <Text mt="15px" color="white" fontWeight={400}>
                  다양한 주제에 대해 브레인스토밍하는 것을 좋아합니다.
                  학습한 내용이나 새로운 아이디어는 남는 시간을 활용하여 구체화합니다.
                  2021년 4월부터 시작하여 지금까지 7개의 사이드 프로젝트를 진행하고 있으며 2,000회 이상의 commit을 했습니다. (2023년 1월 기준)
                </Text>
                <HStack mt="30px" spacing="100px">
                  <VStack spacing="15px">

                    <Flex alignSelf={"start"} alignItems={"center"}>
                      <Avatar style={{ width: 17, height: 17, marginRight: 8 }} name='Teenblur' src={teenblur} />
                      <Text fontSize={"sm"} fontWeight={400} color="white">
                        <span style={{ fontWeight: 700 }}>틴블러.</span> 학생 전용 모바일 플랫폼 (개발중)
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
    </Box>
  </>
  );
}
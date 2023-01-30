import React, { useState, useEffect } from 'react';
import { useColorModeValue, useMediaQuery, HStack, Text, Box, VStack, Grid, GridItem, Image, Avatar, Flex, Spacer } from "@chakra-ui/react";
import antsound from "../../assets/antsound.ico";
import teenblur from "../../assets/teenblur.png";
import { FaGithub, } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';

export default function Intro() {

  return (<>
    <Box w="100%" maxWidth="1000px" bgColor="#00000050" borderRadius={"30px"}
      backdropFilter="auto" backdropBlur={"sm"}
      display="flex" justifyContent="center" alignItems={"center"}
    >
      <VStack px="50px" py="50px">
        <Flex flexDir="column" mb="50px">
          <HStack mb="20px">
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
          <Text fontSize={"6xl"} fontWeight="900" color="white" mb="20px">안녕하세요. <span style={{ color: "#ED8936" }}>강재구</span>입니다.</Text>
          <Text fontSize="lg" fontWeight={400} color="#FFFFFF">현재 블록체인 도메인에서 일하며 <span style={{ fontWeight: "800", color: "white" }}>블록체인 서비스 백엔드 개발</span>을 하고있습니다.</Text>
          <Text fontSize="lg" fontWeight={400} color="#FFFFFF">다양한 SI프로젝트 경험을 기반으로 고가용성을 갖춘 확장형 백엔드 아키텍처를 설계합니다.</Text>
          <br />
          <Text fontSize="lg" fontWeight={400} color="#FFFFFF">동작 보다는 <span style={{ fontWeight: "800", color: "white" }}>데이터 중심의 프로그래밍</span>을 통해 최적화와 일관성을 고민하고, 코드리뷰 및 리팩토링에 많은 시간을 투자합니다.</Text>
        </Flex>

        <HStack>
          <a href="https://github.com/rivernine" target="_blank">
            <FaGithub style={{ color: "white", width: 23, height: 23 }} />
          </a>
          <a href="https://teenblur.com" target="_blank">
            <Avatar style={{ width: 25, height: 25 }} name='Teenblur' src={teenblur} />
          </a>
          <a href="http://antsound.me" target="_blank">
            <Avatar style={{ color: "white", width: 25, height: 25 }} name='Antsound' src={antsound} />
          </a>
        </HStack>
      </VStack>
    </Box>

  </>
  );
}
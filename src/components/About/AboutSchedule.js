import React, { useState, useEffect } from 'react';
import { useColorModeValue, useMediaQuery, HStack, Text, Box, VStack, Grid, GridItem, Image, Avatar, Flex, Spacer } from "@chakra-ui/react";
import profile from "../../assets/profile.jpg";
import { FaGithub, FaChartBar, FaRegAddressCard, FaRegBuilding, FaRobot, FaGraduationCap, FaRegStar } from 'react-icons/fa';
import trello from '../../assets/trello.png'
import teenblur from "../../assets/teenblur.png";
import antsound from "../../assets/antsound.ico";


export default function AboutSchedule() {

  return (<>
    <Box w="1000px" h="500px" px="40px" display="flex" alignItems={"center"}>
      <Box h="450px" display="flex" px="10px"
        bgImage={`url(${trello})`} bgRepeat="no-repeat" bgSize={"cover"}
        justifyContent="center" alignItems="center"
      >
        <Grid templateColumns='repeat(10, 1fr)' gap={4} m="20px" p="20px"
          bgColor="#00000099" backdropFilter="auto" backdropBlur={"2px"}
          borderRadius="10px">
          <GridItem colSpan={10}>
            <Flex flexDir={"column"}>
              <Text fontSize={"2xl"} fontWeight="700" color="white">About schdule</Text>
              <Text mt="15px" color="white" fontWeight={400}>
                매일 저녁, Trello를 활용하여 일정의 카테고리와 우선순위 책정, 진행도 등을 정리하여 효율적인 일정관리를 위해 노력합니다.
                단기, 장기 목표를 설정하고 목표 달성을 위한 방법을 고민합니다. 새로운 아이디어가 생긴다면 구체화 방법과 함께 기록합니다.
              </Text>
            </Flex>
          </GridItem>
        </Grid>
      </Box>
    </Box>
  </>
  );
}
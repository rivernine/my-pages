import React, { useState, useEffect } from 'react';
import { useColorModeValue, useMediaQuery, HStack, Text, Box, VStack, Grid, GridItem, Image, Avatar, Flex, Spacer } from "@chakra-ui/react";
import profile from "../../assets/profile.jpg";
import { FaGithub, FaMobileAlt, FaRegAddressCard, FaRegBuilding, FaRegKeyboard, FaGraduationCap, FaRegStar } from 'react-icons/fa';

export default function AboutMe() {
  // const bg = useColorModeValue('linear(rgb(248, 250, 253), rgba(248, 250, 253, 10))', 'linear(rgb(34, 37, 49), rgba(34, 37, 49, 10))')
  const bg = useColorModeValue('#091C7E', '#1a202c')
  const [isLargerThan900] = useMediaQuery('(min-width: 900px)')
  const [isLargerThan1400] = useMediaQuery('(min-width: 1400px)')

  return (<>
    <Box w="1000px" h="500px" px="10px" display="flex" alignItems={"center"}>
      <Grid
        templateColumns='repeat(10, 1fr)' gap={4}>
        <GridItem colSpan={3}>
          <Image src={profile} style={{ width: 150, height: 150 }} borderRadius="30px" shadow={4} />
        </GridItem>
        <GridItem colSpan={7}>
          <Flex flexDir={"column"}>
            <Text fontSize={"2xl"} fontWeight="700" color="white">About <span style={{ color: "#ED8936" }}>me</span></Text>
            <Text mt="15px" color="white" fontWeight={400}>
              Java & Spring 기반의 서버 구축 및 컨테이너 환경의 서비스 배포를 주로 해왔습니다.
              ELK Stack / Prometheus & Grafana 를 사용하여 서버의 모니터링 환경을 구축하고
              반복적인 업무 해소를 위해 CI/CD 파이프라인을 구성할 수 있습니다.
              또한 Javascript & React 기반의 백오피스를 제작할 수 있습니다.
            </Text>
            <HStack mt="30px" spacing="100px">
              <VStack spacing="15px">
                <Flex w="250px" alignItems={"center"}>
                  <FaMobileAlt style={{
                    size: 15,
                    color: "white",
                    marginRight: 8
                  }} />
                  <Text fontSize={"sm"} fontWeight={400} color="white">
                    <span style={{ fontWeight: 700 }}>Phone.</span> 010-3056-9411
                  </Text>
                </Flex>
                <Flex w="250px" alignItems={"center"}>
                  <FaRegBuilding style={{
                    size: 15,
                    color: "white",
                    marginRight: 8
                  }} />
                  <Text fontSize={"sm"} fontWeight={400} color="white">
                    <span style={{ fontWeight: 700 }}>Employment.</span> LG CNS
                  </Text>
                </Flex>
                <Flex w="250px" alignItems={"center"}>
                  <FaGraduationCap style={{
                    size: 15,
                    color: "white",
                    marginRight: 8
                  }} />
                  <Text fontSize={"sm"} fontWeight={400} color="white">
                    <span style={{ fontWeight: 700 }}>Study.</span> Konkuk Univ.
                  </Text>
                </Flex>
              </VStack>
              <VStack spacing="15px">
                <Flex w="250px" alignItems={"center"}>
                  <FaRegAddressCard style={{
                    size: 15,
                    color: "white",
                    marginRight: 8
                  }} />
                  <Text fontSize={"sm"} fontWeight={400} color="white">
                    <span style={{ fontWeight: 700 }}>Age.</span> 30
                  </Text>
                </Flex>
                <Flex w="250px" alignItems={"center"}>
                  <FaRegKeyboard style={{
                    size: 15,
                    color: "white",
                    marginRight: 8
                  }} />
                  <Text fontSize={"sm"} fontWeight={400} color="white">
                    <span style={{ fontWeight: 700 }}>Job.</span> Back-End Engineer
                  </Text>
                </Flex>
                <Flex w="250px" alignItems={"center"}>
                  <FaRegStar style={{
                    size: 15,
                    color: "white",
                    marginRight: 8
                  }} />
                  <Text fontSize={"sm"} fontWeight={400} color="white">
                    <span style={{ fontWeight: 700 }}>Interests.</span> Work out
                  </Text>
                </Flex>
              </VStack>
            </HStack>
          </Flex>
        </GridItem>
      </Grid>
    </Box>
  </>
  );
}
import React from 'react';
import { HStack, Text, Box, VStack, Grid, GridItem, Image, Flex } from "@chakra-ui/react";
import profile from "../../assets/profile.jpg";
import { FaGoogle, FaRegAddressCard, FaRegBuilding, FaRegKeyboard, FaGraduationCap, FaRegStar } from 'react-icons/fa';

export default function AboutMe() {

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
                <Flex alignItems={"center"} alignSelf="self-start">
                  <FaGoogle style={{
                    size: 15,
                    color: "white",
                    marginRight: 8
                  }} />
                  <Text fontSize={"sm"} fontWeight={400} color="white">
                    <span style={{ fontWeight: 700 }}>Email.</span> againine@gmail.com
                  </Text>
                </Flex>
                <Flex alignItems={"center"} alignSelf="self-start">
                  <FaRegBuilding style={{
                    size: 15,
                    color: "white",
                    marginRight: 8
                  }} />
                  <Text fontSize={"sm"} fontWeight={400} color="white">
                    <span style={{ fontWeight: 700 }}>Employment.</span> LG CNS web3 service
                  </Text>
                </Flex>
                <Flex alignItems={"center"} alignSelf="self-start">
                  <FaGraduationCap style={{
                    size: 15,
                    color: "white",
                    marginRight: 8
                  }} />
                  <Text fontSize={"sm"} fontWeight={400} color="white">
                    <span style={{ fontWeight: 700 }}>Study.</span> Konkuk Univ. computer science
                  </Text>
                </Flex>
              </VStack>
              <VStack spacing="15px">
                <Flex alignItems={"center"} alignSelf="self-start">
                  <FaRegAddressCard style={{
                    size: 15,
                    color: "white",
                    marginRight: 8
                  }} />
                  <Text fontSize={"sm"} fontWeight={400} color="white">
                    <span style={{ fontWeight: 700 }}>Age.</span> 30
                  </Text>
                </Flex>
                <Flex alignItems={"center"} alignSelf="self-start">
                  <FaRegKeyboard style={{
                    size: 15,
                    color: "white",
                    marginRight: 8
                  }} />
                  <Text fontSize={"sm"} fontWeight={400} color="white">
                    <span style={{ fontWeight: 700 }}>Job.</span> Back-End Engineer
                  </Text>
                </Flex>
                <Flex alignItems={"center"} alignSelf="self-start">
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
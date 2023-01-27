import React, { useState, useEffect } from 'react';
import { useColorModeValue, useMediaQuery, HStack, Text, Box, VStack, Flex, Grid, GridItem, Divider } from "@chakra-ui/react";
import { FaCircle } from 'react-icons/fa';
import Content from './Work/Content';

export default function Work() {
  const data = [
    {
      project: "Token As a Service",
      date: "2022.12 ~ 현재",
      title: "블록체인 스캐너 백엔드 아키텍처 설계 및 서버 개발",
      details: [
        "서버 인프라 등 백엔드 아키텍처 구성 및 RDB Scheme 정의",
        "React 페이지 호스팅과 Reverse proxy를 위한 웹서버 구축",
        "Typescript / Nest.js 기반의 서버 개발 및 RESTful API 구현",
        "효율적인 업무 수행을 위해 Jenkins 파이프라인 구축"
      ]
    },
    {
      project: "빗썸 NFT플랫폼 구축",
      date: "2022.01 ~ 2022.11",
      title: "이더리움 NFT 스마트 컨트랙트 개발 및 바우처 서비스 구현",
      details: [
        "Javascript 기반의 스마트 컨트랙트 자동 생성 및 컴파일 모듈 개발",
        "2,000번 이상의 트랜잭션이 발생한 NFT 스마트 컨트랙트 발행 (총 거래량: 약 113ETH)",
        "5개의 스마트 컨트랙트에 대한 감사 프로세스 진행 (주관사: Certik, 코드: 약 10,000줄, 비용: $18,000)",
        "EIP-712를 이용한 바우처서비스 구현으로 이더리움 가스비 대폭 절감 (최소 $10,000 -> $0)"
      ]
    },
  ]

  return (<>
    <Box w="100%" bgColor="white" py="100px"
      justifyContent={"center"} alignItems="center" display="flex">
      <VStack w="100%" maxWidth="1000px" >
        {
          data.map((d, idx) => {
            return (
                <Content
                  key={idx}
                  project={d.project}
                  date={d.date}
                  title={d.title}
                  details={d.details}
                  divide={idx === data.length - 1 ? false :  true}
                />
            )
          })
        }
{/* 
        <Divider style={{ marginTop: 60, marginBottom: 20 }} />
        <Grid w="100%" templateColumns='repeat(10, 1fr)' gap={4}>
          <GridItem colSpan={3}>
            <Text fontSize={"2xl"} fontWeight="700" color="black"
              textDecoration={"underline"} textDecorationColor="orange.400"
              textDecorationThickness={2} textUnderlineOffset="4px"
            >
              빗썸 NFT플랫폼 구축
            </Text>
            <Text fontSize={"lg"} fontWeight="700" color="gray.500">
              2022.01 ~ 11
            </Text>
          </GridItem>
          <GridItem colSpan={7} bgColor="tomato"></GridItem>
        </Grid>
        <Divider />
        <Grid w="100%" templateColumns='repeat(10, 1fr)' gap={4}>
          <GridItem colSpan={3}>
            <Text fontSize={"2xl"} fontWeight="700" color="black"
              textDecoration={"underline"} textDecorationColor="orange.400"
              textDecorationThickness={2} textUnderlineOffset="4px"
            >
              Token As a Service
            </Text>
            <Text fontSize={"lg"} fontWeight="700" color="gray.500">
              2022.12 ~ 현재
            </Text>
          </GridItem>
          <GridItem colSpan={7} bgColor="tomato"></GridItem>
        </Grid> */}
      </VStack>
    </Box>
  </>
  );
}
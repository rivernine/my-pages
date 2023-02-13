import React from 'react';
import { Text, Box, Flex, Grid, GridItem, Divider, Tag, Image, HStack, useMediaQuery, VStack } from "@chakra-ui/react";
import lgcns from "../../assets/lgcns.png";

export default function Company({
}) {
  let idx = 0;

  const data = [
    "블록체인 아키텍처 설계 및 스마트 컨트랙트 개발",
    "API서버 개발 및 모니터링 환경 구축",
    "2020 / 2021년 Fast-Track 사원 선정",
  ]

  const [isLargerThan1000] = useMediaQuery('(min-width: 1000px)')
  const [isLargerThan750] = useMediaQuery('(min-width: 750px)')

  const renderContentLargerThan750 = () => {
    return (
      <>
        <HStack>
          <Image src={lgcns} style={{ width: 40, height: 40 }} borderRadius="30px" shadow={4} />
          <Text fontSize={"3xl"} fontWeight="700" color="gray.600"
          >
            LG CNS
          </Text>
        </HStack>
        <Text fontSize={"xl"} fontWeight="700" color="black">
          블록체인 아키텍트
        </Text>
        <Text fontSize={"md"} fontWeight="400" color="gray.400">
          2019.01 ~ 현재
        </Text>
        <Box mt="30px">
          {
            data.map((d, j) => {
              return (
                <Flex key={idx++} mb="4px">
                  <HStack>
                    <Text fontSize={10} alignSelf="flex-start" mt="5px">● </Text>
                    <Text>{d}</Text>
                  </HStack>
                </Flex>
              )
            })
          }
        </Box>
        <Divider style={{ marginTop: 50, marginBottom: -50 }} />
      </>
    )
  }

  const renderContentSmallerThan750 = () => {
    return (
      <>
        <Box px="20px" w="100%">
          <HStack w="100%">
            <Image src={lgcns} style={{ width: 40, height: 40 }} borderRadius="30px" shadow={4} />
            <Text fontSize={"2xl"} fontWeight="700" color="gray.600"            >
              LG CNS
            </Text>
          </HStack>
          <Text fontSize={"lg"} fontWeight="700" color="black" >
            블록체인 아키텍트
          </Text>
          <Text fontSize={"sm"} fontWeight="400" color="gray.400">
            2019.01 ~ 현재
          </Text>
          <Box mt="20px" w="100%">
            {
              data.map((d, j) => {
                return (
                  <Flex key={idx++} mb="4px">
                    <HStack>
                      <Text fontSize={8} alignSelf="flex-start" mt="5px">● </Text>
                      <Text fontSize="sm">{d}</Text>
                    </HStack>
                  </Flex>
                )
              })
            }
          </Box>
          <Divider style={{ marginTop: 50, marginBottom: -100 }} />
        </Box>
      </>
    );
  }

  return (
    <>
      <Box id="company" ref={null} w="100%" bgColor="#FFFFFF" py="100px"
        justifyContent={"center"} alignItems="center" display="flex"      >
        <Box w="100%" maxWidth="1000px" alignItems={"center"}>
          {
            isLargerThan750 ?
              renderContentLargerThan750() :
              renderContentSmallerThan750()
          }
        </Box>
      </Box>
    </>
  );
}
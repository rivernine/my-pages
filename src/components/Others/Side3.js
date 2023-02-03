import React from 'react';
import { Text, Box, VStack, Flex, Image, Button, Tooltip, useMediaQuery } from "@chakra-ui/react";
import { FaCircle, FaLink } from 'react-icons/fa';
import cryptoGeneratorIntro from '../../assets/crypto-generator-intro.png'

export default function Side3() {

  let idx = 0;

  const [isLargerThan1000] = useMediaQuery('(min-width: 1000px)')
  const [isLargerThan850] = useMediaQuery('(min-width: 850px)')

  const data = [
    "Spring Schedule을 사용하여 초단타 매매 기능 구현",
    "Pymysql & Pandas를 이용한 데이터 수집 / 분석 모듈 개발",
    "텔레그램 종목추천 봇 개발",
  ]

  const renderContentLargerThan850 = () => {
    return (
      <Box w={isLargerThan1000 ? "1000px" : "100%"}>
        <Box display="flex" position="relative">
          <Image src={cryptoGeneratorIntro} style={{ width: 600, height: "auto" }} borderRightRadius="30px" shadow={4} zIndex={0} />
          <Box w="600px" bgColor={"#191e28"} mt="20px" right="0"
            position="absolute" borderRadius={"30px"} p="40px" >
            <Text fontSize="sm" fontWeight="400" color="#AAAAAA">로봇 트레이딩 - Upbit, Binance, 키움증권</Text>
            <Text fontSize={"2xl"} fontWeight="700" color="white">
              <span style={{ color: "#ED8936" }}>C</span>
              rypto-Generator
            </Text>
            <Text fontWeight="400" color="#AAAAAA">
              감정을 제거한 투자를 하기 위해 시작한 프로젝트
            </Text>
            <VStack mt="40px" alignItems={"start"}>
              {
                data.map(d => {
                  return (
                    <Flex key={idx++} mb="4px" alignItems={"center"}>
                      <FaCircle color="#ED8936" size="10" style={{ marginRight: 10 }} />
                      <Text color="#FFFFFF">{d}</Text>
                    </Flex>
                  )
                })
              }
              <Tooltip label="관련 repository로 연결됩니다.">
                <Button style={{ marginTop: 30 }} alignSelf={"end"} leftIcon={<FaLink />} colorScheme={"orange"}
                  onClick={() => window.open('https://github.com/rivernine/crypto-generator', '_blank')}>
                  ENTER
                </Button>
              </Tooltip>
            </VStack>
          </Box>
        </Box>
      </Box>
    )
  }

  const renderContentSmallerThan850 = () => {
    return (
      <VStack w="100%">
        <Box>
          <Image src={cryptoGeneratorIntro} style={{ width: "100vw", height: "auto" }} />
        </Box>
        <Box w="100vw">
          <Box bgColor={"#191e28"} mt="0px" px="20px" py="30px">
            <Text fontSize="xs" fontWeight="400" color="#AAAAAA">로봇 트레이딩 - Upbit, Binance, 키움증권</Text>
            <Text fontSize={"xl"} fontWeight="700" color="white">
              <span style={{ color: "#ED8936" }}>C</span>
              rypto-Generator
            </Text>
            <Text fontSize="sm" fontWeight="400" color="#AAAAAA">
              감정을 제거한 투자를 하기 위해 시작한 프로젝트
            </Text>
            <VStack mt="20px" alignItems={"start"}>
              {
                data.map(d => {
                  return (
                    <Flex key={idx++} mb="2px" alignItems={"center"}>
                      <FaCircle color="#ED8936" size="8" style={{ marginRight: 10 }} />
                      <Text fontSize="sm" color="#FFFFFF">{d}</Text>
                    </Flex>
                  )
                })
              }
              <Tooltip label="관련 repository로 연결됩니다.">
                <Button style={{ marginTop: 15 }} alignSelf={"end"} leftIcon={<FaLink />} colorScheme={"orange"}
                  onClick={() => window.open('https://github.com/rivernine/crypto-generator', '_blank')}>
                  ENTER
                </Button>
              </Tooltip>
            </VStack>
          </Box>
        </Box>
      </VStack>
    )
  }

  return (<>
    {
      isLargerThan850 ?
        renderContentLargerThan850() :
        renderContentSmallerThan850()
    }
  </>
  );
}
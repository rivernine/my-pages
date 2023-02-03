import React from 'react';
import { Text, Box, VStack, Flex, Image, Button, Tooltip } from "@chakra-ui/react";
import { FaCircle, FaLink } from 'react-icons/fa';
import cryptoGeneratorIntro from '../../assets/crypto-generator-intro.png'

export default function Side3() {

  return (<>
    <Box w="1000px">
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
            <Flex mb="4px" alignItems={"center"}>
              <FaCircle color="#ED8936" size="10" style={{ marginRight: 10 }} />
              <Text color="#FFFFFF">Spring Schedule을 사용하여 초단타 매매 기능 구현</Text>
            </Flex>
            <Flex mb="4px" alignItems={"center"}>
              <FaCircle color="#ED8936" size="10" style={{ marginRight: 10 }} />
              <Text color="#FFFFFF">Pymysql & Pandas를 이용한 데이터 수집 / 분석 모듈 개발</Text>
            </Flex>
            <Flex mb="4px" alignItems={"center"}>
              <FaCircle color="#ED8936" size="10" style={{ marginRight: 10 }} />
              <Text color="#FFFFFF">텔레그램 종목추천 봇 개발</Text>
            </Flex>
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
  </>
  );
}
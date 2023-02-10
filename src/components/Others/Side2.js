import React from 'react';
import { Text, Box, VStack, Flex, Image, Spacer, Button, Tooltip, useMediaQuery, HStack } from "@chakra-ui/react";
import { FaLink } from 'react-icons/fa';
import antsoundIntro from '../../assets/antsound-intro.png'

export default function Side2() {

  let idx = 0;

  const [isLargerThan1000] = useMediaQuery('(min-width: 1000px)')
  const [isLargerThan850] = useMediaQuery('(min-width: 850px)')

  const data = [
    "디자인 퍼블리싱 및 React.js를 사용하여 PC / Mobile 반응형 웹 개발",
    "10개의 크롤러와 9개의 ETL 배치 서비스를 안정적으로 스케줄링",
    "Pandas와 mecab을 활용하여 Text mining & 상관계수 분석 구현 ",
    "Socket.io를 활용하여 실시간 단어 수집 및 채팅 구현",
    "Java / Spring 기반의 서버와 Nginx 기반의 웹서버 구축",
  ]

  const renderContentLargerThan850 = () => {
    return (
      <Box w={isLargerThan1000 ? "1000px" : "100%"}>
        <Box display="flex" position="relative">
          <Box h="500px">
            <Image src={antsoundIntro} style={{ width: 750, height: 'auto', right: 0, position: "absolute" }} borderLeftRadius="30px" shadow={4} zIndex={0} />
          </Box>
          <Box w="600px" bgColor={"#191e28"} mt="30px"
            position="absolute" borderRadius={"30px"} p="40px" >
            <Text fontSize="sm" fontWeight="400" color="#AAAAAA">코인과 단어의 상관계수 분석 사이트</Text>
            <Text fontSize={"2xl"} fontWeight="700" color="white">
              <span style={{ color: "#ED8936" }}>개</span>
              미소리
            </Text>
            <Text fontWeight="400" color="#AAAAAA">
              코인과 단어의 상관계수를 통해 새로운 인사이트를 얻고자 개발한 웹사이트
            </Text>
            <VStack mt="40px" alignItems={"start"}>
              {
                data.map(d => {
                  return (
                    <Flex key={idx++} mb="4px">
                      <HStack>
                        <Text fontSize={10} color="#ED8936" alignSelf="flex-start" mt="5px">● </Text>
                        <Text color="#FFFFFF">{d}</Text>
                      </HStack>
                    </Flex>
                  )
                })
              }
              <Spacer />
              <Tooltip label="개미소리 웹사이트로 연결됩니다.">
                <Button style={{ marginTop: 30 }} alignSelf={"end"} leftIcon={<FaLink />} colorScheme={"orange"}
                  onClick={() => window.open('http://antsound.me', '_blank')}>
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
      <VStack w="100%" px="0px">
        <Box >
          <Image src={antsoundIntro} style={{ width: "100vw", height: 'auto', }} shadow={4} />
        </Box>
        <Box w="100vw">
          <Box bgColor={"#191e28"} mt="0px" px="20px" py="30px">
            <Text fontSize="xs" fontWeight="400" color="#AAAAAA">코인과 단어의 상관계수 분석 사이트</Text>
            <Text fontSize={"xl"} fontWeight="700" color="white">
              <span style={{ color: "#ED8936" }}>개</span>
              미소리
            </Text>
            <Text fontSize="sm" fontWeight="400" color="#AAAAAA">
              코인과 단어의 상관계수를 통해 새로운 인사이트를 얻고자 개발한 웹사이트
            </Text>
            <VStack mt="20px" alignItems={"start"}>
              {
                data.map(d => {
                  return (
                    <Flex key={idx++} mb="4px">
                      <HStack>
                        <Text fontSize={8} color="#ED8936" alignSelf="flex-start" mt="5px">● </Text>
                        <Text fontSize="sm" color="#FFFFFF">{d}</Text>
                      </HStack>
                    </Flex>
                  )
                })
              }
              <Spacer />
              <Tooltip label="개미소리 웹사이트로 연결됩니다.">
                <Button size="sm" style={{ marginTop: 15 }} alignSelf={"end"} leftIcon={<FaLink />} colorScheme={"orange"}
                  onClick={() => window.open('http://antsound.me', '_blank')}>
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
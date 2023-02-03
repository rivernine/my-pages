import React from 'react';
import { Text, Box, VStack, Flex, Image, Button, Tooltip, useMediaQuery } from "@chakra-ui/react";
import { FaCircle, FaLink } from 'react-icons/fa';
import teenblurIntro from '../../assets/teenblur-intro.png'

export default function Side1() {

  let idx = 0;

  const [isLargerThan1000] = useMediaQuery('(min-width: 1000px)')
  const [isLargerThan850] = useMediaQuery('(min-width: 850px)')

  const data = [
    "디자인 퍼블리싱 및 React-Native를 사용하여 Android & iOS 앱 개발",
    "React.memo()와 이미지 압축 전송으로 게시판 렌더링 성능 최적화",
    "SQLite와 FCM를 사용하여 푸시알림 및 실시간 채팅 기능 구현",
    "FCM Token의 발행과 구독 관리 시스템을 직접 구축하여 Firestore 비용 절감",
    "Java / Spring 기반의 서버와 Nginx 기반의 웹서버 구축",
  ]

  const renderContentLargerThan850 = () => {
    return (
      <Box w={isLargerThan1000 ? "1000px" : "100%"}>
        <Box display="flex" position="relative">
          <Image src={teenblurIntro} style={{ width: 500, height: "auto", }} borderRightRadius="30px" shadow={4} />
          <Box w="600px" bgColor={"#191e28"} mt="30px" right="0"
            position="absolute" borderRadius={"30px"} p="40px" >
            <Text fontSize="sm" fontWeight="400" color="#AAAAAA">학생 전용 모바일 플랫폼</Text>
            <Text fontSize={"2xl"} fontWeight="700" color="white">
              <span style={{ color: "#ED8936" }}>T</span>
              EENBLUR
              <span style={{ marginLeft: 50, fontSize: 12, color: "#AAAAAA" }}> - In develop</span>
            </Text>
            <Text fontWeight="400" color="#AAAAAA">
              학생만 입장할 수 있는 소통의 공간을 만들기 위해 시작한 프로젝트
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
              <Tooltip label="틴블러 소개 웹사이트로 연결됩니다.">
                <Button style={{ marginTop: 30 }} alignSelf={"end"} leftIcon={<FaLink />} colorScheme={"orange"}
                  onClick={() => window.open('https://teenblur.com', '_blank')}>
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
      <VStack w="100%" px="20px">
        <Box>
          <Image src={teenblurIntro} style={{ width: "80vw", height: "auto", }} borderRightRadius="30px" shadow={4} />
        </Box>
        <Box w="100vw">
          <Box bgColor={"#191e28"} mt="0px" px="20px" py="30px" >
            <Text fontSize="xs" fontWeight="400" color="#AAAAAA">학생 전용 모바일 플랫폼</Text>
            <Text fontSize={"xl"} fontWeight="700" color="white">
              <span style={{ color: "#ED8936" }}>T</span>
              EENBLUR
              <span style={{ marginLeft: 50, fontSize: 10, color: "#AAAAAA" }}> - In develop</span>
            </Text>
            <Text fontSize="sm" fontWeight="400" color="#AAAAAA">
              학생만 입장할 수 있는 소통의 공간을 만들기 위해 시작한 프로젝트
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
              <Tooltip label="틴블러 소개 웹사이트로 연결됩니다.">
                <Button size="sm" style={{ marginTop: 15 }} alignSelf={"end"} leftIcon={<FaLink />} colorScheme={"orange"}
                  onClick={() => window.open('https://teenblur.com', '_blank')}>
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
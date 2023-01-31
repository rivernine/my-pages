import React from 'react';
import { Text, Box, VStack, Flex, Image, Button } from "@chakra-ui/react";
import { FaCircle, FaLink } from 'react-icons/fa';
import teenblurIntro from '../../assets/teenblur-intro.png'

export default function Side1() {

  return (<>
    <Box w="1000px">
      <Box display="flex" position="relative">
        <Image src={teenblurIntro} style={{ width: 500, height: "auto", }} borderRightRadius="30px" shadow={4}/>
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
            <Flex mb="4px" alignItems={"center"}>
              <FaCircle color="#ED8936" size="10" style={{ marginRight: 10 }} />
              <Text color="#FFFFFF">디자인 퍼블리싱 및 React-Native를 사용하여 Android & iOS 앱 개발</Text>
            </Flex>
            <Flex mb="4px" alignItems={"center"}>
              <FaCircle color="#ED8936" size="10" style={{ marginRight: 10 }} />
              <Text color="#FFFFFF">React.memo()와 이미지 압축 전송으로 게시판 렌더링 성능 최적화</Text>
            </Flex>
            <Flex mb="4px" alignItems={"center"}>
              <FaCircle color="#ED8936" size="10" style={{ marginRight: 10 }} />
              <Text color="#FFFFFF">SQLite와 FCM를 사용하여 푸시알림 및 실시간 채팅기능 구현</Text>
            </Flex>
            <Flex mb="4px" alignItems={"center"}>
              <FaCircle color="#ED8936" size="10" style={{ marginRight: 10 }} />
              <Text color="#FFFFFF">FCM Token의 발행과 구독 관리 시스템을 직접 구축하여 Firestore 비용 절감</Text>
            </Flex>
            <Flex mb="4px" alignItems={"center"}>
              <FaCircle color="#ED8936" size="10" style={{ marginRight: 10 }} />
              <Text color="#FFFFFF">Java / Spring 기반의 서버와 Nginx 기반의 웹서버 구축</Text>
            </Flex>
            <Button style={{marginTop: 30}} alignSelf={"end"} leftIcon={<FaLink />} colorScheme={"orange"}
              onClick={() => window.open('https://teenblur.com', '_blank')}>
              ENTER
            </Button>
          </VStack>
        </Box>
      </Box>
    </Box>
  </>
  );
}
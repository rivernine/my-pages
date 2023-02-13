import React, { useEffect, useRef } from 'react';
import { Box, VStack, IconButton, Tooltip } from "@chakra-ui/react";
import { FaLink } from 'react-icons/fa';
import Content from './Content';

export default function Work({ WorkFunc }) {
  const data = [
    {
      project: "Token As a Service",
      date: "2022.12 ~ 현재",
      hasCustomer: false,
      customer: "LG CNS",
      title: "웹서비스 백엔드 아키텍처 설계 및 서버 개발",
      details: [
        "서버 인프라 등 백엔드 아키텍처 구성 및 RDB Scheme 정의",
        "Typescript & Nest.js 기반의 서버 개발 및 RESTful API 구현",
        "TypeORM, Data Mapper패턴을 사용하여 RDB와의 관계 매핑",
        "Filter와 Pipe를 오버라이딩하여 Http response 표준화",
        "효율적인 업무 수행을 위해 Jenkins 파이프라인 구축"
      ],
      skills: [
        "Typescript", "MariaDB", "GCP Cloud SQL", "Apigee", "Nest.js", "TypeORM", "Jenkins"
      ]
    },
    {
      project: "NFT 마켓플레이스 구축",
      date: "2022.01 ~ 2022.11",
      hasCustomer: true,
      customer: "Bithumb Meta",
      title: "이더리움 NFT 스마트 컨트랙트 개발 및 바우처 서비스 구현",
      details: [
        "Javascript 기반의 스마트 컨트랙트 자동 생성 및 컴파일 모듈 개발",
        "2,000번 이상의 트랜잭션이 발생한 NFT 스마트 컨트랙트 발행 (총거래량: 약 113ETH)",
        "5개의 스마트 컨트랙트에 대한 감사 프로세스 진행 (주관사: Certik, 코드: 약 10,000줄, 비용: $18,000)",
        "EIP-712를 이용한 바우처서비스 구현으로 이더리움 가스비 대폭 절감 (최소 $10,000 -> $0)"
      ],
      detailsComponent: [
        null,
        <Tooltip label="실시간 트랜잭션을 확인할 수 있는 스캐너사이트에 연결됩니다.">
          <IconButton icon={<FaLink />} colorScheme={"orange"} variant="ghost" size="xs"
            onClick={() => window.open('https://etherscan.io/address/0xa74bf3a26f8396a0d25a263c09de85bd765f4f68', '_blank')} />
        </Tooltip>
        ,
        null,
        null
      ],
      skills: [
        "Javascript", "Shell", "Solidity", "Ethereum", "NFT", "Web3.js", "Ethers"
      ]
    },
    {
      project: "P2P 분산 거래 유통플랫폼",
      date: "2020.10 ~ 2021.12",
      hasCustomer: true,
      customer: "KT NET",
      title: "블록체인 및 백엔드 아키텍처 설계 & 개발 / 데이터 서비스 개발",
      details: [
        "Mybatis, Spring Batch를 사용하여 ETL 서비스 구축",
        "Pandas와 Prophet을 이용하여 데이터 분석 모듈 개발",
        "Gitlab과 Jenkins를 활용한 CI/CD 파이프라인 구성으로 배포 및 빌드 자동화 환경 구성",
        "Hyperledger Fabric 아키텍처 설계 및 노드 구성, 체인코드 개발",
        "블록체인 성능 개선을 위해 버전 업그레이드와 OS 파라미터 튜닝, 블록생성설정 변경 등의 작업들을 수행하여 최대 TPS 기준 write 5%, read 20% 이상 성능 개선",
      ],
      detailsComponent: [
        <Tooltip label="Spring Batch를 활용한 ETL구현 가이드로 연결됩니다.">
          <IconButton icon={<FaLink />} colorScheme={"orange"} variant="ghost" size="xs"
            onClick={() => window.open('https://velog.io/@rivernine/series/ETL', '_blank')} />
        </Tooltip>,
        null,
        null,
        <Tooltip label="Hyperledger Fabric v2.2 구축 가이드로 연결됩니다.">
          <IconButton icon={<FaLink />} colorScheme={"orange"} variant="ghost" size="xs"
            onClick={() => window.open('https://velog.io/@rivernine/Hyperledger-Fabric-v2.2-%EB%84%A4%ED%8A%B8%EC%9B%8C%ED%81%AC-%EA%B5%AC%EC%B6%95%ED%95%98%EA%B8%B0-%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EB%AF%B8%EC%82%AC%EC%9A%A9', '_blank')} />
        </Tooltip>,
        null,
      ],
      skills: [
        "Java", "Go", "Python", "Groovy", "Hyperledger Fabric", "Gitlab", "Jenkins", "Spring-boot", "Spring Batch", "Pymysql", "Pandas", "Prophet", "Jmeter"
      ]
    },
    {
      project: "DID TFT",
      date: "2020.04 ~ 2020.08",
      hasCustomer: false,
      customer: "LG CNS",
      title: "백오피스 구축을 통한 후방업무지원",
      details: [
        "React.js 기반의 어드민 페이지 개발",
        "Prometheus를 이용하여 Spring 서버 매트릭 수집, Grafana를 통해 서버 모니터링 환경 구성",
        "Socket.io를 사용, SPA에서 Webhook과 유사한 기능을 개발하여 QR 로그인 기능 구현",
      ],
      detailsComponent: [
        null,
        <Tooltip label="Spring의 메트릭을 수집하고 모니터링 환경을 구축하는 가이드로 연결됩니다.">
          <IconButton icon={<FaLink />} colorScheme={"orange"} variant="ghost" size="xs"
            onClick={() => window.open('https://velog.io/@rivernine/Prometheus-Grafana-with-Docker', '_blank')} />
        </Tooltip>,
        null,
      ],
      skills: [
        "Javascript", "React", "Prometheus", "Grafana", "Socket.io"
      ]
    },
    {
      project: "한국조폐공사 블록체인 오픈플랫폼",
      date: "2019.03 ~ 2019.05",
      hasCustomer: true,
      customer: "한국조폐공사",
      title: "블록체인 성능 테스트 및 모니터링환경 구축",
      details: [
        "블록체인 테스팅 툴 코어를 수정하여 MVCC회피 방안 제시",
        "블록체인 트랜잭션 정보를 수집하는 Golang기반의 Event client 자체 제작 & ELK Stack을 통해 데이터 조회 및 모니터링",
      ],
      detailsComponent: [
        <Tooltip label="블록체인 성능테스팅 툴 가이드와 MVCC회피 방안에 대해 작성한 문서로 연결됩니다.">
          <IconButton icon={<FaLink />} colorScheme={"orange"} variant="ghost" size="xs"
            onClick={() => window.open('https://github.com/rivernine/velog/blob/master/%EC%95%8C%EB%A9%B4%EC%9C%A0%EC%9A%A9%ED%95%9C%EC%A7%80%EC%8B%9D/07_Caliper-MVCC-%ED%9A%8C%ED%94%BC/%EA%B0%9C%EC%9A%94.pdf', '_blank')} />
        </Tooltip>
        ,
        <Tooltip label="Hyperledger Fabric의 트랜잭션을 ELK Stack으로 핸들링하는 가이드로 연결됩니다.">
          <IconButton icon={<FaLink />} colorScheme={"orange"} variant="ghost" size="xs"
            onClick={() => window.open('https://velog.io/@rivernine/Hyperledger-Fabric-with-ELK-Stack', '_blank')} />
        </Tooltip>,
      ],
      skills: [
        "Javascript", "Go", "Hyperledger Fabric", "Hyperledger Caliper", "Filebeat", "Logstash", "Elastic Search", "Kibana"
      ]
    },
  ]

  const workRef = useRef(null)
  const gotoScroll = () => {
    workRef.current?.scrollIntoView({ behavior: 'smooth' });
  }

  useEffect(() => {
    WorkFunc.gotoScroll = gotoScroll
  })

  return (<>
    <Box id="work" ref={workRef} w="100%" bgColor="white" py="100px"
      justifyContent={"center"} alignItems="center" display="flex">
      <VStack w="100%" maxWidth="1000px" >
        {
          data.map((d, idx) => {
            return (
              <Content
                key={idx}
                project={d.project}
                date={d.date}
                hasCustomer={d.hasCustomer}
                customer={d.customer}
                title={d.title}
                details={d.details}
                detailsComponent={d.detailsComponent}
                skills={d.skills}
                divide={idx === data.length - 1 ? false : true}
              />
            )
          })
        }
      </VStack>
    </Box>
  </>
  );
}
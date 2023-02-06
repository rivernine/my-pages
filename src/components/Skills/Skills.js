import React, { useEffect, useRef } from 'react';
import { Box, VStack, } from "@chakra-ui/react";
import Content from './Content';

export default function Skills({ SkillsFunc }) {
  const data = [
    {
      title: 'Back-End',
      contents: [
        'Java, Python, TypeScript',
        'AWS EC2, S3, GCP Cloud SQL, Firebase Cloud Messaging, Fire Store',
        'Spring Boot, Nest.js, Spring Batch, ETL, Job Scheduling',
        'TypeORM, MyBatis',
      ]
    },
    {
      title: 'DevOps',
      contents: [
        'Jira, Confluence, Github/GitLab',
        'Jenkins, Docker, Nginx',
        'MySQL, MariaDB, Redis, CouchDB',
        'ELK Stack, Prometheus & Grafana',
      ]
    },
    {
      title: 'Blockchain',
      contents: [
        'Solidity, Go',
        'Ethereum, Hyperledger Fabric',
        'IPFS, Web3, NFT(ERC-721, ERC-1155)',
      ]
    },
    {
      title: 'Front-End',
      contents: [
        'JavsScript',
        'React, React-Native',
        'MUI, Chakra UI, Ant Design',
        "Google Analytics"
      ]
    }
  ]

  const skillsRef = useRef(null)
  const gotoScroll = () => {
    skillsRef.current?.scrollIntoView({ behavior: 'smooth' });
  }

  useEffect(() => {
    SkillsFunc.gotoScroll = gotoScroll
  })

  return (<>
    <Box id="skills" ref={skillsRef} w="100%" bgColor="white" py="100px"
      justifyContent={"center"} alignItems="center" display="flex">
      <VStack w="100%" maxWidth="1000px" >
        {
          data.map((d, idx) => {
            return (
              <Content
                key={idx}
                title={d.title}
                contents={d.contents}
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
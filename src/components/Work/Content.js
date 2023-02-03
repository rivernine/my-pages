import React from 'react';
import { Text, Box, Flex, Grid, GridItem, Divider, Tag, HStack, useMediaQuery, VStack } from "@chakra-ui/react";

export default function Content({
  project, date, hasCustomer, customer, title, details, detailsComponent, divide, skills
}) {
  let idx = 0;

  const [isLargerThan1000] = useMediaQuery('(min-width: 1000px)')
  const [isLargerThan750] = useMediaQuery('(min-width: 750px)')

  const renderContentLargerThan750 = () => {
    return (
      <>
        <Grid w="100%" templateColumns='repeat(10, 1fr)' gap={4}
          px={isLargerThan1000 ? "0px" : "20px"}
        >
          <GridItem colSpan={3}>
            <Text fontSize={"xl"} fontWeight="700" color="gray.600"
              textDecoration={"underline"} textDecorationColor="orange.400"
              textDecorationThickness={2} textUnderlineOffset="4px"
            >
              {project}
            </Text>
            <Text fontSize={"md"} fontWeight="400" color="gray.400">
              {date}
            </Text>
            <Text fontSize={"xs"} fontWeight="400" color="gray.400">
              {
                hasCustomer ?
                  `고객사 - ${customer}` :
                  `LG CNS`
              }
            </Text>
          </GridItem>
          <GridItem colSpan={7}>
            <Text fontSize={"xl"} fontWeight="700" color="black">
              {title}
            </Text>
            <Box mt="30px">
              {
                details && details.map((detail, j) => {
                  return (
                    <Flex key={idx++} mb="4px">
                      <HStack>
                        <Text fontSize={10} alignSelf="flex-start" mt="5px">● </Text>
                        <Text>{detail}{detailsComponent && detailsComponent[j] && detailsComponent[j]}</Text>
                      </HStack>
                    </Flex>
                  )
                })
              }
            </Box>
            <Box mt="15px">
              {
                skills && skills.map(skill => {
                  return (
                    <Tag key={idx++} size="sm" variant="subtle" mr="5px" mt="5px">{skill}</Tag>
                  );
                })
              }
            </Box>
          </GridItem>
        </Grid>
        {divide && <Divider style={{ marginTop: 50, marginBottom: 20 }} />}
      </>
    )
  }

  const renderContentSmallerThan750 = () => {
    return (
      <>
        <VStack spacing="20px" px="20px" w="100%">
          <Box w="100%">
            <Text fontSize={"lg"} fontWeight="700" color="gray.600"
              textDecoration={"underline"} textDecorationColor="orange.400"
              textDecorationThickness={2} textUnderlineOffset="4px"
            >
              {project}
            </Text>
            <Text fontSize={"sm"} fontWeight="400" color="gray.400">
              {date}
            </Text>
            <Text fontSize={"2xs"} fontWeight="400" color="gray.400">
              {
                hasCustomer ?
                  `고객사 - ${customer}` :
                  `LG CNS`
              }
            </Text>
            <Text mt="20px" fontSize={"lg"} fontWeight="700" color="black">
              {title}
            </Text>
          </Box>

          <Box mt="30px" w="100%">
            {
              details && details.map((detail, j) => {
                return (
                  <Flex key={idx++} mb="4px">
                    <HStack>
                      <Text fontSize={8} alignSelf="flex-start" mt="5px">● </Text>
                      <Text fontSize="sm">{detail}{detailsComponent && detailsComponent[j] && detailsComponent[j]}</Text>
                    </HStack>
                  </Flex>
                )
              })
            }
          </Box>
          <Box mt="15px" w="100%">
            {
              skills && skills.map(skill => {
                return (
                  <Tag key={idx++} size="sm" variant="subtle" mr="5px" mt="5px">{skill}</Tag>
                );
              })
            }
          </Box>
          {divide && <Divider style={{ marginTop: 25, marginBottom: 10 }} />}
        </VStack>
      </>
    );
  }

  return (
    <>
      {
        isLargerThan750 ?
          renderContentLargerThan750() :
          renderContentSmallerThan750()
      }
    </>
  );
}
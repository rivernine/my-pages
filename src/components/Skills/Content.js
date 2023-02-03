import React from 'react';
import { Text, Box, Flex, Grid, GridItem, Divider, useMediaQuery, VStack } from "@chakra-ui/react";
import { FaCircle } from 'react-icons/fa';

export default function Content({
  title, contents, divide
}) {
  let idx = 0;

  const [isLargerThan1200] = useMediaQuery('(min-width: 1200px)')
  const [isLargerThan1000] = useMediaQuery('(min-width: 1000px)')
  const [isLargerThan750] = useMediaQuery('(min-width: 750px)')

  const renderContentLargerThan750 = () => {
    return (
      <>
        <Grid w="100%" templateColumns='repeat(10, 1fr)' gap={4}>
          <GridItem colSpan={3}>
            <Text fontSize={"xl"} fontWeight="700" color="#ED8936"
            >
              {title}
            </Text>
          </GridItem>
          <GridItem colSpan={7}>
            <Box>
              {
                contents.map(content => {
                  return (
                    <Flex key={idx++} alignItems="center">
                      <FaCircle size="6" style={{ marginRight: 10 }} />
                      <Text fontSize="md">{content}</Text>
                    </Flex>
                  )
                })
              }
            </Box>
          </GridItem>
        </Grid>
        {divide && <Divider style={{ marginTop: 20, marginBottom: 20 }} />}
      </>
    )
  }

  const renderContentSmallerThan750 = () => {
    return (
      <>
        <VStack spacing="10px" px="20px" w="100%">
          <Box w="100%">
            <Text fontSize={"lg"} fontWeight="700" color="#ED8936">
              {title}
            </Text>
          </Box>
          <Box w="100%">
            {
              contents.map(content => {
                return (
                  <Flex key={idx++} alignItems="center">
                    <FaCircle size="4" style={{ marginRight: 10 }} />
                    <Text fontSize="sm">{content}</Text>
                  </Flex>
                )
              })
            }
          </Box>

        </VStack>

        {divide && <Divider style={{ marginTop: 10, marginBottom: 10 }} />}
      </>
    )
  }

  return (<>
    {
      isLargerThan750 ?
        renderContentLargerThan750() :
        renderContentSmallerThan750()
    }
  </>
  );
}
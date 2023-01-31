import React from 'react';
import { Text, Box, Flex, Grid, GridItem, Divider } from "@chakra-ui/react";
import { FaCircle } from 'react-icons/fa';

export default function Content({
  title, contents, divide
}) {
  let idx = 0;

  return (<>
    <Grid w="100%" templateColumns='repeat(10, 1fr)' gap={4}>
      <GridItem colSpan={3}>
        <Text fontSize={"xl"} fontWeight="700" color="#ED8936"
          // textDecoration={"underline"} textDecorationColor="orange.400"
          // textDecorationThickness={2} textUnderlineOffset="4px"
        >
          {title}
        </Text>
      </GridItem>
      <GridItem colSpan={7}>
        {/* <Text fontSize={"xl"} fontWeight="700" color="black">
          {title}
        </Text> */}
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
  );
}
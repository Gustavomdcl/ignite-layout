import { Box, Flex, Text } from "@chakra-ui/react";

import { Container } from './Container'

export function ContinentBanner(){
  return(
    <Box
      backgroundImage="url('/images/europe_continent_background.png')"
      backgroundPosition="center"
      backgroundSize="cover"
    >
      <Container>
        <Flex
          as="section"
          width="100%"
          minHeight={["150px","500px"]}
          align={["center","end"]}
          justify={["center","start"]}
          px={["0","10"]}
          py={["0","14"]}
          position="relative"
        >
          <Text 
            as="h1"
            fontWeight="semibold"
            fontSize={["2xl","5xl"]}
            color="light.headingsText"
          >Europa</Text>
        </Flex>
      </Container>
    </Box>
  )
}
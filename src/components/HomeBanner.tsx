import { Flex, Box, Image, Text, VStack } from "@chakra-ui/react";

import { Container } from './Container'

export function HomeBanner(){
  return(<Box
    backgroundImage="url('/images/home_banner_background.png')"
    backgroundPosition="center"
    backgroundSize="cover"
    mb={["0px","33px"]}
  >
    <Container>
      <Flex
        as="section"
        width="100%"
        minHeight={["163px","335px"]}
        align="center"
        px={["4","10"]}
        py={"4"}
        position="relative"
      >
        <Box
          w={"100%"}
          maxW={["100%","524px"]}
          color="light.white"
        >
          <VStack spacing={["2","5"]} align="start">
            <Text 
              as="h1"
              fontWeight="medium"
              fontSize={["xl","4xl"]}
            >5 Continentes,<br /> infinitas possibilidades.</Text>
            <Text fontSize={["sm","xl"]}>Chegou a hora de tirar do papel a viagem que você sempre sonhou. </Text>
          </VStack>
        </Box>
        <Box flex={1}>
          <Image 
            src="/images/airplane.png"
            display={["none","inherit"]}
            position="absolute"
            right="10"
            bottom="-33px"
          />
        </Box>
      </Flex>
    </Container>
  </Box>)
}
import { Box, Flex, Text } from "@chakra-ui/react";

import { Container } from './Container'

interface ContinentBannerProps {
  title: string
  background: string
}

export function ContinentBanner({title,background}:ContinentBannerProps){
  return(
    <Box
      backgroundImage={`url('${background}')`}
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
          >{title}</Text>
        </Flex>
      </Container>
    </Box>
  )
}
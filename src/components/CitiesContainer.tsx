import { Box, Text, Flex } from "@chakra-ui/react";

import { Container } from './Container'
import { CityItem } from './CityItem'

interface CitiesContainerProps {
  populous: [
    {
      city: string
      country: string
      background: string
      flag: string
    }
  ]
}

export function CitiesContainer({populous}:CitiesContainerProps){
  return(
    <Box>
      <Container>
        <Box
          as="section"
          px={["4","10"]}
          mb={["5","10"]}
        >
          <Text
            as="h2"
            fontWeight={"medium"}
            fontSize={["2xl","4xl"]}
            mb={["5","10"]}
          >
            Cidades +100
          </Text>
          <Flex
            flexWrap="wrap"
          >
            {populous.map((city,index)=><CityItem city={city.city} country={city.country} background={city.background} flag={city.flag} key={index}  />)}
          </Flex>
        </Box>
      </Container>
    </Box>
  )
}
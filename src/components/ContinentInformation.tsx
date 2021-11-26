import { Box, SimpleGrid, Text, Flex } from "@chakra-ui/react";

import { Container } from './Container'
import { AnalyticsItem } from './AnalyticsItem'

interface ContinentInformationProps {
  description: string
  analytics: {
    country_number: number,
    language_number: number,
    city_number: number
  }
  populous?: [
    {
      city: string
      country: string
      background: string
      flag: string
    }
  ]
}

export function ContinentInformation({description,analytics,populous}:ContinentInformationProps){
  return(
    <Box>
      <Container>
        <SimpleGrid
          as="section"
          gridTemplateColumns={["1fr","repeat(2, 1fr)"]}
          gridGap={["4","10"]}
          width="100%"
          alignItems="center"
          justifyContent="center"
          px={["4","10"]}
          py={["6","20"]}
          position="relative"
        >
          <Box>
            <Text
              fontSize={["sm","2xl"]}
            >{description}</Text>
          </Box>
          <Box>
            <Flex
              justifyContent={["space-between","space-around"]}
            >
              <AnalyticsItem value={analytics.country_number} title="Países" />
              <AnalyticsItem value={analytics.language_number} title="Línguas" />
              <AnalyticsItem value={analytics.city_number} title="Cidades" info="Entre as 100 cidades mais visitadas do mundo." />
            </Flex>
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
  )
}
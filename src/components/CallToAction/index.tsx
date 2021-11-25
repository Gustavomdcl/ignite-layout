import { Box, Text } from "@chakra-ui/react";
import { Slider } from "./Slider"

export function CallToAction(){
  return(
    <Box
      mb={["6","10"]}
    >
      <Text
        textAlign="center"
        my={["6","12"]}
        fontWeight="medium"
        fontSize={["xl","4xl"]}
      >Vamos nessa?<br/> Então escolha seu continente</Text>
      <Slider />
    </Box>
  )
}
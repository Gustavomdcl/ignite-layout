import { Box, Image, Text, Flex } from "@chakra-ui/react";

interface CityItemProps {
  city: string
  country: string
  background: string
  flag: string
}

export function CityItem({city,country,background,flag,...rest}:CityItemProps){
  return (
    <Box
      maxW="256px"
      mb="8"
      mr="8"
      {...rest}
    >
      <Image
        borderTopRadius="4px"
        src={background} 
      />
      <Flex
        borderBottomRadius="4px"
        border="1px solid #fff"
        borderColor="highlight.50"
        borderTop="none"
        p="6"
        justify="space-between"
        align="center"
        background="light.white"
        fontFamily="Barlow"
      >
        <Box>
          <Text fontWeight="semibold" fontSize="xl" mb="1">{city}</Text>
          <Text fontWeight="medium" fontSize="md" color="dark.info100">{country}</Text>
        </Box>
        <Image src={flag} w="30px" h="30px" />
      </Flex>
    </Box>
  )
}
import { Box, BoxProps } from "@chakra-ui/react";

export function Container({...rest}:BoxProps){
  return(<Box 
    {...rest} 
    width="100%" 
    maxW="1240px"
    mx="auto"
  />)
}
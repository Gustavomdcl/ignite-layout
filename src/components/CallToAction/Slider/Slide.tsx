import { Box } from "@chakra-ui/react";

interface SlideProps {
  children: React.ReactNode
  background: string
}

export function Slide({children,background}:SlideProps){
  return(
    <Box 
      backgroundImage={`url('${background}')`}
      backgroundPosition="center"
      backgroundSize="cover"
      height={["250px","450px"]}
      cursor="pointer"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >{children}</Box>
  )
}
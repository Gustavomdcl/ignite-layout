import { ListItem, ListItemProps, Text, Image, useBreakpointValue } from "@chakra-ui/react";

interface FeatureItemProps extends ListItemProps {
  src: string
  children: string
}

export function FeatureItem({src,children,...rest}:FeatureItemProps){
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  })
  return(
    <ListItem 
      {...rest}
      display={"flex"}
      flexDirection={["row","column"]}
      justifyContent="center"
      alignItems="center"
      minW="50%"
    >
      <Image display={["none","inherit"]} src={src} />
      <Text
        textTransform="lowercase"
        fontSize={["lg","2xl"]}
        fontWeight={["medium","semibold"]}
        mt={["0","6"]}
        display="flex"
        alignItems="center"
        _before={isWideVersion ? {} : {
          content: '"•"',
          color: "highlight.100",
          fontSize: "3xl",
          display: "block",
          mr: "2"
        }}
      >{children}</Text>
    </ListItem>
  )
}
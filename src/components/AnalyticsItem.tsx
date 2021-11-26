import { Text, Flex, Tooltip, Icon } from "@chakra-ui/react";
import { MdOutlineInfo } from "react-icons/md";

interface AnalyticsItemProps {
  value: number
  title: string
  info?: string
}

export function AnalyticsItem({value,title,info}:AnalyticsItemProps){
  return(
    <Flex
      flexDirection="column"
      justifyContent={"center"}
      alignItems={["start","center"]}
    >
      <Text
        fontWeight="semibold"
        color="highlight.100"
        fontSize={["2xl","5xl"]}
      >{value}</Text>
      <Text
        fontSize={["lg","2xl"]}
        fontWeight={["normal","semibold"]}
        textTransform="lowercase"
      >
        {title}
        {info && (<Tooltip label={info}><span>
          {' +100'} <Icon color="dark.info50" as={MdOutlineInfo} fontSize={["xs","md"]} />
        </span></Tooltip>)}
      </Text>
    </Flex>
  )
}
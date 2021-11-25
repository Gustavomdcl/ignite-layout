import { List, Box } from "@chakra-ui/react";

import { FeatureItem } from "./FeatureItem"

export function Features(){
  return(<Box px={["4","10"]} py={["9","20"]}>
    <List
      as="ul"
      display={["flex","grid"]}
      gridTemplateColumns={["repeat(2, 1fr)","repeat(5, 1fr)"]}
      flexWrap="wrap"
      justifyContent="center"
    >
      <FeatureItem src="/images/cocktail.png">Vida noturna</FeatureItem>
      <FeatureItem src="/images/surf.png">Praia</FeatureItem>
      <FeatureItem src="/images/building.png">Moderno</FeatureItem>
      <FeatureItem src="/images/museum.png">Clássico</FeatureItem>
      <FeatureItem src="/images/earth.png">e mais...</FeatureItem>
    </List>
  </Box>)
}
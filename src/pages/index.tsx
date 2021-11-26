import { Box, Divider } from "@chakra-ui/react";

import { Header } from "../components/Header"
import { HomeBanner } from "../components/HomeBanner"
import { Features } from "../components/Features"
import { CallToAction } from "../components/CallToAction"
import { CitiesContainer } from "../components/CitiesContainer"

export default function Home() {
  return (<Box>
    <Header />
    <Box as="main">
      <HomeBanner />
      <Features />
      <Divider borderColor="dark.headingsText" width={["60px","90px"]} mx="auto" />
      <CallToAction />
    </Box>
  </Box>)
}

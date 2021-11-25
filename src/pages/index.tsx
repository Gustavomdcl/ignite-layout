import { Box } from "@chakra-ui/react";

import { Header } from "../components/Header"
import { HomeBanner } from "../components/HomeBanner"

export default function Home() {
  return (<Box>
    <Header />
    <Box as="main">
      <HomeBanner />
      <h1>oioi</h1>
    </Box>
  </Box>)
}

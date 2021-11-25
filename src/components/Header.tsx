import { Flex, Image, Icon, IconButton } from "@chakra-ui/react";
import { MdOutlineArrowBackIos } from "react-icons/md";
import Link from 'next/Link'
import { useRouter } from 'next/router'

import { Container } from './Container'

export function Header(){
  const { asPath } = useRouter()
  return(<Container>
    <Flex
      as="header"
      width="100%"
      height={["50px","100px"]}
      justify="center"
      align="center"
      position="relative"
      px={["1","10"]}
      py={["1","8"]}
    >
      {(asPath!=="/s") && (<Link href="/" passHref>
        <IconButton
          as="a"
          aria-label="Back to dashboard"
          icon={<Icon as={MdOutlineArrowBackIos} fontSize={["10","20"]} />}
          position="absolute"
          left={["1","8"]}
          variant="ghost"
        />
      </Link>)}
      <Image src="/images/logo.svg" width={['81px','185px']} />
    </Flex>
  </Container>)
}
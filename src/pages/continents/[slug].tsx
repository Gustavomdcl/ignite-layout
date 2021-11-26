import { Box } from "@chakra-ui/react";
import { GetServerSideProps } from "next"

import { Header } from "../../components/Header"
import { ContinentBanner } from "../../components/ContinentBanner"
import { ContinentInformation } from "../../components/ContinentInformation"
import { CitiesContainer } from "../../components/CitiesContainer"


interface ContinentsProps {
  post: {
    slug: string
    title: string
    description: string
    background: string
    analytics: {
      country_number: number,
      language_number: number,
      city_number: number
    }
    populous?: [
      {
        city: string
        country: string
        background: string
        flag: string
      }
    ]
  }
}

export default function Continents({post}:ContinentsProps){
  return(
    <Box>
      <Header />
      <ContinentBanner title={post.title} background={post.background} />
      <ContinentInformation description={post.description} analytics={post.analytics} populous={post.populous} />
      {post.populous&&<CitiesContainer populous={post.populous} />}
    </Box>
  )
}

export const getServerSideProps: GetServerSideProps = async ({params}) => {
  const {slug} = params

  

  const post = {
    slug,
    title: 'Europa',
    description: 'A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste',
    background: '/images/europe_continent_background.png',
    analytics: {
      country_number: 50,
      language_number: 60,
      city_number: 27
    },
    populous: [
      {
        city: 'Londres',
        country: 'Reino Unido',
        background: '/images/london.png',
        flag: '/images/united_kindom.png'
      },
      {
        city: 'Paris',
        country: 'França',
        background: '/images/paris.png',
        flag: '/images/france.png'
      }
    ]
  }

  return {
    props: {
      post,
    },
  }
}
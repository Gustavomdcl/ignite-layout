import { Box, Text } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation, Pagination } from 'swiper'
import { useRouter } from 'next/router'

SwiperCore.use([ Navigation, Pagination ]);

import 'swiper/css';
import "swiper/css/navigation"
import "swiper/css/pagination"

import { Slide } from "./Slide"

const slides = [
  {
    slug: 'europe',
    title: 'Europa',
    description: 'O continente mais antigo.',
    image: '/images/europe_background.png'
  },
  {
    slug: 'europe',
    title: 'Europa',
    description: 'O continente mais antigo.',
    image: '/images/europe_background.png'
  },
  {
    slug: 'europe',
    title: 'Europa',
    description: 'O continente mais antigo.',
    image: '/images/europe_background.png'
  },
  {
    slug: 'europe',
    title: 'Europa',
    description: 'O continente mais antigo.',
    image: '/images/europe_background.png'
  },
  {
    slug: 'europe',
    title: 'Europa',
    description: 'O continente mais antigo.',
    image: '/images/europe_background.png'
  },
]

export function Slider(){
  const router = useRouter()
  return (
    <Box>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        navigation={true}
        pagination={{
          "clickable": true
        }}
        // onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => {
          console.log(swiper)
          swiper.clickedSlide
        }}
        className="mySwiper"
      >
        {slides.map((slide,index)=>(<SwiperSlide
          onClick={(swiper)=>{
            console.log(swiper)
            router.push(`continents/${slide.slug}`)
          }}
          key={index}
        ><Slide background={slide.image}>
          <Text
            fontWeight="bold"
            fontSize={["2xl","5xl"]}
            color="light.headingsText"
          >{slide.title}</Text>
          <Text
            fontWeight="bold"
            fontSize={["sm","2xl"]}
            color="light.info"
            mt={["2","4"]}
          >{slide.description}</Text>
        </Slide></SwiperSlide>))}
      </Swiper>
    </Box>
  )
}
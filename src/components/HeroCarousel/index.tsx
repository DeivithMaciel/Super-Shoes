import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, EffectFade } from 'swiper/modules'

import imageWoman from '../../Assets/images/hero_image_1.jpg'
import imageKid from '../../Assets/images/hero_image_2.jpg'
import imageMan from '../../Assets/images/hero_image_3.png'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'

import * as S from './styles'

const HeroCarousel = () => {
  const slides = [
    {
      id: 1,
      image: imageWoman,
      description: 'Atendendo todos os públicos'
    },
    {
      id: 2,
      image: imageKid,
      description: 'Resistente à energia de uma criança'
    },
    {
      id: 3,
      image: imageMan,
      description: 'Combina com sua roupa'
    }
  ]

  return (
    <S.Carousel>
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        speed={1500}
        effect="fade"
        fadeEffect={{ crossFade: true }}
      >
        {slides.map((slide) => (
          <SwiperSlide
            key={slide.id}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div>
              <S.Description>{slide.description}</S.Description>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </S.Carousel>
  )
}
export default HeroCarousel

'use client'

import { useMemo } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'

type Props = {}

export const Testimonials = (props: Props) => {
  const testimonials = useMemo(
    () => [
      {
        image: 'image-1.png',
        message: (
          <>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            nulla dolores voluptatem quibusdam neque eaque quis, eius blanditiis
            debitis voluptatum autem consectetur eum impedit animi vero ab
            accusamus similique. Possimus.
          </>
        ),
        name: 'Robert Rene',
        location: 'Spain',
      },
      {
        image: 'image-2.png',
        message: (
          <>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum eius
            est provident enim distinctio similique at eaque doloremque ut
            culpa? Enim, numquam? Ratione voluptate repudiandae iusto tenetur
            vero minima assumenda!
          </>
        ),
        name: 'Thomas Cook',
        location: 'Poland',
      },
    ],
    []
  )

  return (
    <div>
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 4000, disableOnInteraction: true }}
        loop
        speed={2000}
      >
        {testimonials.map(({ name, location, image, message }, index) => (
          <SwiperSlide key={index}>
            <div></div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

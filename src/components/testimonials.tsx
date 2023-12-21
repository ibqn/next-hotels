'use client'

import { useMemo } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { FadeDirection, fadeIn } from '@/utils/variants'

type Props = {}

export const Testimonials = (props: Props) => {
  const testimonials = useMemo(
    () => [
      {
        image: 'image-1.png',
        message: (
          <>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio
            possimus unde debitis itaque delectus praesentium alias voluptatem
            non. Aliquam, adipisci. Autem sunt provident cupiditate dolorem
            vero, eius voluptas eum perferendis, distinctio iste vel.
            Necessitatibus quam enim cum magni possimus iusto, incidunt
            repellendus blanditiis exercitationem laboriosam, maiores odio.
          </>
        ),
        name: 'Robert Rene',
        location: 'Spain',
      },
      {
        image: 'image-2.png',
        message: (
          <>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, et!
            Repellendus voluptatum fugiat odit, inventore magnam eius animi!
            Ipsa mollitia soluta consectetur sequi velit sapiente sint debitis
            recusandae repellat, et asperiores quam libero tenetur sit vel
            placeat ullam ratione hic distinctio eos reiciendis blanditiis.
            Nobis suscipit similique sint.
          </>
        ),
        name: 'Thomas Cook',
        location: 'Poland',
      },
    ],
    []
  )

  return (
    <motion.section
      className="bg-softgreen xl:h-[880px]"
      variants={fadeIn(FadeDirection.up, 0.4)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <div className="container mx-auto">
        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          className="overflow-hidden xl:h-[680px]"
        >
          {testimonials.map(({ name, location, image, message }, index) => (
            <SwiperSlide key={index}>
              <div className="grid grid-cols-1 py-12 xl:grid-cols-2 xl:py-24">
                <Image
                  className="hidden xl:flex"
                  src={`/testimonials/${image}`}
                  alt="Person"
                  width={470}
                  height={470}
                  quality={100}
                />

                <div className="min-h-[470px] flex-1 rounded-3xl bg-white/20 p-12 text-white">
                  <p className="mb-8 text-lg leading-9">{message}</p>
                  <p className="text-x font-bold">{name}</p>
                  <p>{location}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </motion.section>
  )
}

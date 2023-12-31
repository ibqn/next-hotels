'use client'

import { useMemo } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { FadeDirection, fadeIn } from '@/utils/variants'

type Props = {}

export const Recommendations = (props: Props) => {
  const recommendations = useMemo(
    () => [
      {
        name: 'Shanghai Hotel',
        image: 'hotel-1.png',
        location: 'Shanghai, China',
        description: (
          <>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
            debitis voluptate excepturi ea praesentium quaerat, quod suscipit
            temporibus rerum perferendis!
          </>
        ),
        price: 40,
        testimonial: {
          message:
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium saepe nemo, eveniet odio ratione consectetur.',
          name: 'Robert Rene',
        },
      },
      {
        name: 'Peaks Lodge',
        image: 'hotel-2.png',
        location: 'Aspen, USA',
        description: (
          <>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
            debitis voluptate excepturi ea praesentium quaerat, quod suscipit
            temporibus rerum perferendis!
          </>
        ),
        price: 80,
        testimonial: {
          message:
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium saepe nemo, eveniet odio ratione consectetur.',
          name: 'Emily Jhonson',
        },
      },
      {
        name: 'Tropical Oasis Resort',
        image: 'hotel-3.png',
        location: 'Bali, Indonesia',
        description: (
          <>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
            debitis voluptate excepturi ea praesentium quaerat, quod suscipit
            temporibus rerum perferendis!
          </>
        ),
        price: 120,
        testimonial: {
          message:
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium saepe nemo, eveniet odio ratione consectetur.',
          name: 'Michael Anderson',
        },
      },
    ],
    []
  )

  return (
    <motion.section
      className="relative bg-softgreen-secondary pb-12 xl:pb-[112px] xl:pt-[157px]"
      variants={fadeIn(FadeDirection.up, 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <motion.div
        variants={fadeIn(FadeDirection.up, 0.4)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 4000, disableOnInteraction: true }}
          loop
          speed={2000}
        >
          {recommendations.map(
            (
              { name, location, description, price, image, testimonial },
              index
            ) => (
              <SwiperSlide key={index}>
                <div className="flex flex-col gap-y-12 xl:flex-row xl:gap-y-0 xl:pl-[135px]">
                  <div className="order-2 mx-auto max-w-[345px] text-center xl:order-1 xl:mx-0 xl:pt-8 xl:text-left">
                    <h2 className="h2 mb-4">{name}</h2>

                    <p className="mb-6 text-sm text-softgreen">{location}</p>

                    <p className="mb-[60px]">{description}</p>

                    <div className="flex items-center gap-x-[50px]">
                      <Button variant="accent" className="px-[44px]">
                        Book Now
                      </Button>

                      <div className="text-black">
                        <span className="text-2xl font-bold">{price}</span>
                        <span className="text-sm">/Night</span>
                      </div>
                    </div>
                  </div>

                  <div className="relative order-1 flex h-[634px] flex-1 justify-center xl:order-2 xl:justify-end">
                    <div>
                      <Image
                        className="xl:rounded-bl-[20px] xl:rounded-tl-[20px]"
                        src={`/recommendation/${image}`}
                        width={905}
                        height={528}
                        quality={100}
                        alt="Recommendation"
                      />

                      <div className="bg-softgreen p-4 text-center text-white xl:absolute xl:bottom-0 xl:min-h-[212px] xl:max-w-[468px] xl:translate-x-1/2 xl:rounded-xl xl:px-10 xl:text-left">
                        <p className="mx-auto mb-3 max-w-md xl:mx-0 xl:mb-6 xl:max-w-none">
                          {testimonial.message}
                        </p>
                        <p className="text-xl font-bold">{testimonial.name}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            )
          )}
        </Swiper>
      </motion.div>

      <Image
        src={'/recommendation/pattern.svg'}
        alt="Pattern"
        width={240}
        height={240}
        className="absolute -bottom-[120px] left-[135px] hidden xl:flex"
      />
    </motion.section>
  )
}

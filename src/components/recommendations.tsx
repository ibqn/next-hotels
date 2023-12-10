'use client'

import { useMemo } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { Button } from './ui/button'

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
    <section>
      <div>
        <Swiper>
          {recommendations.map(
            ({ name, location, description, price }, index) => (
              <SwiperSlide key={index}>
                <div>
                  <div className="max-w-[345px] xl:pt-8">
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

                  <div>image & testimonials</div>
                </div>
              </SwiperSlide>
            )
          )}
        </Swiper>
      </div>
    </section>
  )
}

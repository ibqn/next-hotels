'use client'

import { useMemo } from 'react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { FadeDirection, fadeIn } from '@/utils/variants'

type Props = {}

export const Find = (props: Props) => {
  const hotels = useMemo(
    () => [
      {
        image: 'hotel-1.png',
        name: 'Hotel De Luna',
        location: 'Singapore',
      },
      {
        image: 'hotel-2.png',
        name: 'Ina Tretes Hotel',
        location: 'New York',
      },
      {
        image: 'hotel-3.png',
        name: 'Delight Hotel',
        location: 'Moscow',
      },
      {
        image: 'hotel-4.png',
        name: 'Mercusuar Hotel',
        location: 'Italy',
      },
    ],
    []
  )

  return (
    <section className="py-12 xl:py-36">
      <div className="container mx-auto">
        <div className="text-center">
          <motion.h2
            className="h2 mb-2"
            variants={fadeIn(FadeDirection.up, 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            Find your best hotel
          </motion.h2>
          <motion.p
            className="mx-auto mb-8 max-w-[638px]"
            variants={fadeIn(FadeDirection.up, 0.4)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga, eum
            optio ad qui illum debitis velit ratione ipsum neque doloremque!
          </motion.p>
          <motion.div
            variants={fadeIn(FadeDirection.up, 0.6)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <Button variant="accent" className="mb-12 px-12 xl:mb-28">
              View All
            </Button>
          </motion.div>
        </div>

        <motion.div
          className="grid gap-y-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-[30px] xl:gap-y-0"
          variants={fadeIn(FadeDirection.up, 0.6)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {hotels.map(({ image, name, location }, index) => (
            <div
              className="group mx-auto h-[390px] w-[270px] overflow-hidden rounded-xl border-2 border-outline transition-all duration-700 hover:cursor-pointer hover:bg-softgreen xl:mx-0"
              key={index}
            >
              <div className="h-[270px] w-[270px] overflow-hidden">
                <Image
                  src={`/find/${image}`}
                  width={270}
                  height={270}
                  alt="Hotel"
                  className="transition-all duration-300 group-hover:scale-105"
                />
              </div>

              <div className="p-6">
                <h4 className="h4 transition-all duration-300 group-hover:text-white">
                  {name}
                </h4>
                <p className="transition-all duration-300 group-hover:text-white">
                  {location}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

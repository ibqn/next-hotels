'use client'

import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Stats } from '@/components/stats'
import { motion, useInView } from 'framer-motion'
import { FadeDirection, fadeIn } from '@/utils/variants'
import { useRef } from 'react'
import { useMediaQuery } from 'react-responsive'

type Props = {}

export const About = (props: Props) => {
  const ref = useRef(null)
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' })
  const isInView = useInView(ref, { amount: isMobile ? 0.0 : 0.5 })

  return (
    <section ref={ref} className="py-12 xl:pb-24 xl:pt-0">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row">
          <motion.div
            className="relative flex-1"
            variants={fadeIn(FadeDirection.right, 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <Image src="/about/img2.png" alt="About" width={559} height={721} />
          </motion.div>

          <motion.div
            className="xl:max-w-[470px]"
            variants={fadeIn(FadeDirection.left, 0.5)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <h2 className="h2 mb-[38px]">About Hotely</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores,
              a quo. Nulla esse optio rerum magni delectus architecto, a nihil,
              soluta quisquam labore nobis sit vero alias quibusdam assumenda
              iure?
            </p>
            <div className="my-5 min-h-[35px] xl:my-10">
              {isInView && <Stats />}
            </div>
            <p className="mb-10">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis dicta modi quibusdam nobis dolorem unde
              necessitatibus, cupiditate aut quae officia.
            </p>

            <Button variant="accent">Explore More</Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

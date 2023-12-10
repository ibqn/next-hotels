'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { FadeDirection, fadeIn } from '@/utils/variants'

type Props = {}

export const Featured = (props: Props) => {
  return (
    <motion.section
      variants={fadeIn(FadeDirection.up, 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.4 }}
      className="relative ml-auto max-w-[1305px] rounded-bl-[30px] rounded-tl-[30px] bg-softgreen-secondary px-[80px] py-[60px] xl:-top-[120px] xl:h-[240px]"
    >
      <div className="flex h-full flex-col items-center gap-x-[30px] text-center xl:flex-row xl:text-left">
        <Image
          className="xl:mr-[50px]"
          src="/featured/icon.svg"
          alt="Featured"
          width={73}
          height={84}
        />
        <h2 className="h2 flex-1 leading-relaxed text-softgreen">
          Book an awesome room in less than one minute.
        </h2>

        <p className="flex-1 leading-loose text-softgreen">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus
          distinctio fuga animi quisquam recusandae, voluptatum eos dolore,
          laboriosam alias suscipit dolores adipisci exercitationem fugit illum.
        </p>
      </div>
    </motion.section>
  )
}

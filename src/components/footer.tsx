'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useMemo } from 'react'
import { motion } from 'framer-motion'
import { FadeDirection, fadeIn } from '@/utils/variants'
import { Socials } from '@/components/socials'

type Props = {}

export const Footer = (props: Props) => {
  const navigationLinks = useMemo(
    () => [
      { name: 'Home', href: '/' },
      { name: 'Find Hotel', href: '/' },
      { name: 'About Us', href: '/' },
      { name: 'Contact Us', href: '/' },
    ],
    []
  )

  const year = useMemo(() => new Date().getFullYear(), [])

  return (
    <footer className="relative bg-softgreen-secondary pt-12 xl:pt-0">
      <div className="container mx-auto">
        <motion.div
          variants={fadeIn(FadeDirection.up, 0.4)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
        >
          <div className="flex min-h-[394px] flex-col rounded-xl bg-white p-8 xl:-translate-y-36 xl:flex-row xl:gap-x-12 xl:p-20">
            <div className="mb-6 xl:mb-0 xl:w-[470px]">
              <Link href="/">
                <Image
                  className="mb-2"
                  src="/footer/logo.svg"
                  width={80}
                  height={36}
                  alt="Logo"
                />
              </Link>
              <p className="text-lg leading-9">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Assumenda deleniti numquam illo facilis temporibus dignissimos
                veritatis consectetur! Repellat, numquam recusandae.
              </p>
            </div>

            <div className="flex xl:ml-32 xl:gap-x-16">
              <div className="flex-1">
                <h4 className="h4 mb-6">Navigation</h4>

                <ul className="flex flex-col gap-y-6 text-lg">
                  {navigationLinks.map(({ name, href }, index) => (
                    <li key={index}>
                      <Link href={href}>{name}</Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex-1">
                <h4 className="h4 mb-6">Contact Us</h4>

                <ul className="flex flex-col gap-y-6 text-lg">
                  <li>+62 123 123981</li>
                  <li>info@hotely.com</li>
                  <li>hotely.com</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="flex flex-col py-12 xl:-mt-32 xl:flex-row xl:justify-between">
          <p className="mb-4 text-center font-semibold text-black xl:mb-0">
            Copyright &copy; {year}. All rights reserved.
          </p>
          <Socials className="mx-auto flex gap-x-4 text-black xl:mx-0" />
        </div>
      </div>
    </footer>
  )
}

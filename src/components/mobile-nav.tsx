import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Menu } from 'lucide-react'
import { Nav } from '@/components/nav'
import Image from 'next/image'
import Link from 'next/link'
import { Socials } from '@/components/socials'

type Props = {}

export const MobileNav = (props: Props) => {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu size={36} className="text-white" />
      </SheetTrigger>

      <SheetContent side="left">
        <div className="flex h-full flex-col justify-between p-12">
          <Link href="/" className="mb-24">
            <Image
              src="/footer/logo.svg"
              alt="Logo"
              width={90}
              height={46}
              priority
            />
          </Link>

          <Nav
            className="text-black"
            listStyles="flex flex-col gap-y-6 text-xl"
          />

          <Socials className="flex gap-x-4 text-black" />
        </div>
      </SheetContent>
    </Sheet>
  )
}

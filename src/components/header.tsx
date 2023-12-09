import { MobileNav } from '@/components/mobile-nav'
import Link from 'next/link'
import { Nav } from '@/components/nav'
import { Button } from '@/components/ui/button'

type Props = {}

export const Header = (props: Props) => {
  return (
    <header className="absolute w-full max-w-[1440px] py-8 xl:py-10">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <Link href="/">
            <h1 className="text-2xl font-bold text-white">Hotely</h1>
          </Link>

          <div className="hidden xl:flex">
            <div className="flex items-center gap-x-12">
              <Nav
                className="flex items-center justify-between"
                listStyles="flex gap-x-12 text-white"
              />

              <Button variant="outline" className="h-[58px] px-10">
                Login
              </Button>
            </div>
          </div>
        </div>

        <div className="absolute right-8 top-8 xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  )
}

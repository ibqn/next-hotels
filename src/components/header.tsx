import { MobileNav } from "@/components/mobile-nav"

type Props = {}

export const Header = (props: Props) => {
  return (
    <header className="container mx-auto">
      <div className="absolute right-8 top-8 xl:hidden"><MobileNav/></div>
    </header>
  )
}

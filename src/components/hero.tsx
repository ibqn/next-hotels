import { SearchBox } from '@/components/search-box'

type Props = {}

export const Hero = (props: Props) => {
  return (
    <section className="bg-hero2 xl:bg-hero flex items-center justify-center bg-cover bg-center bg-no-repeat pb-12 pt-24 xl:h-[1087px] xl:py-0">
      <div className="container mx-auto flex items-center justify-center xl:justify-start">
        <SearchBox />
      </div>
    </section>
  )
}

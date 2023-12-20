import { useMemo } from 'react'
import { Button } from '@/components/ui/button'

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
        <div>
          <h2>Find your best hotel</h2>
          <p className="mx-auto mb-8 max-w-[638px]">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga, eum
            optio ad qui illum debitis velit ratione ipsum neque doloremque!
          </p>
          <div>
            <Button variant="accent" className="mb-12 px-12 xl:mb-28">
              View All
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

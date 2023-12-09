import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Stats } from '@/components/stats'

type Props = {}

export const About = (props: Props) => {
  return (
    <section className="py-12 xl:pb-24 xl:pt-0">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row">
          <div className="relative flex-1">
            <Image src="/about/img2.png" alt="About" width={559} height={721} />
          </div>

          <div className="xl:max-w-[470px]">
            <h2 className="h2 mb-[38px]">About Hotely</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores,
              a quo. Nulla esse optio rerum magni delectus architecto, a nihil,
              soluta quisquam labore nobis sit vero alias quibusdam assumenda
              iure?
            </p>
            <div className="my-5 min-h-[35px] xl:my-10">
              <Stats />
            </div>
            <p className="mb-10">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis dicta modi quibusdam nobis dolorem unde
              necessitatibus, cupiditate aut quae officia.
            </p>

            <Button variant="accent">Explore More</Button>
          </div>
        </div>
      </div>
    </section>
  )
}

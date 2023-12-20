import { About } from '@/components/about'
import { Featured } from '@/components/featured'
import { Find } from '@/components/find'
import { Hero } from '@/components/hero'
import { Recommendations } from '@/components/recommendations'

export default function Home() {
  return (
    <>
      <Hero />
      <Featured />
      <About />
      <Recommendations />
      <Find />
    </>
  )
}

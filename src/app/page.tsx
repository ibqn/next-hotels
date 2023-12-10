import { About } from '@/components/about'
import { Featured } from '@/components/featured'
import { Hero } from '@/components/hero'
import { Recommendations } from '@/components/recommendations'

export default function Home() {
  return (
    <>
      <Hero />
      <Featured />
      <About />
      <Recommendations />
    </>
  )
}

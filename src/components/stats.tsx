'use client'

import { useMemo } from 'react'
import CountUp from 'react-countup'

type Props = {}

export const Stats = (props: Props) => {
  const statsData = useMemo(
    () => [
      { value: 1.2, type: 'Hotels', unit: 'k' },
      { value: 4.8, type: 'Rooms', unit: 'k' },
      { value: 186, type: 'Countries' },
    ],
    []
  )

  return (
    <div className="my-10 flex flex-col gap-x-8 gap-y-8 xl:flex-row">
      {statsData.map(({ value, type, unit }, index) => (
        <div key={index} className="flex">
          <div className="flex items-baseline gap-x-2">
            <h3 className="h3 text-softgreen">
              <CountUp
                start={0}
                end={value}
                decimals={value % 1 === 0 ? 0 : 1}
                duration={6}
              />

              {unit !== undefined && <span>{unit}</span>}
            </h3>

            <div className="font-semibold text-black">{type}</div>
          </div>
        </div>
      ))}
    </div>
  )
}

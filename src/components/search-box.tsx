'use client'

import { MapPin } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { DatePicker } from '@/components/date-picker'

type Props = {}

export const SearchBox = (props: Props) => {
  return (
    <div className="bg-pink">
      <div>
        <Label htmlFor="destination">Where are you going?</Label>

        <div className="relative mb-[20px] flex items-center">
          <Input id="destination" placeholder='Try "Singapore"' />
          <MapPin size={24} className="absolute right-6 text-black" />
        </div>

        <div>
          <div>
            <Label>Check in</Label>
            <DatePicker />
          </div>
        </div>
      </div>
    </div>
  )
}

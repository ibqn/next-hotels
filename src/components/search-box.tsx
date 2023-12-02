'use client'

import { MapPin } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { DatePicker } from '@/components/date-picker'
import { GuestSelect } from '@/components/guest-select'
import { Checkbox } from '@/components/ui/checkbox'
import { Button } from '@/components/ui/button'

type Props = {}

export const SearchBox = (props: Props) => {
  return (
    <div className="bg-white flex max-h-max w-full max-w-[488px] flex-col rounded-[20px] border border-outline p-10">
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

          <div>
            <Label>Check out</Label>
            <DatePicker />
          </div>
        </div>
      </div>

      <div>
        <div>
          <Label>Guests</Label>
          <GuestSelect />
        </div>

        <div>
          <Checkbox id="terms" />
          <Label htmlFor="terms">Pay when checking in?</Label>
        </div>

        <Button size="lg" variant="accent">
          Search Hotel
        </Button>
      </div>
    </div>
  )
}

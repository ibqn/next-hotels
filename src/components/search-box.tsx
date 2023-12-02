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
    <div className="flex max-h-max w-full max-w-[488px] flex-col rounded-[20px] border border-outline bg-white p-10">
      <div className="mb-[20px]">
        <Label htmlFor="destination">Where are you going?</Label>

        <div className="relative mb-[20px] flex items-center">
          <Input id="destination" placeholder='Try "Singapore"' />
          <MapPin size={24} className="absolute right-6 text-black" />
        </div>

        <div className="flex  flex-col gap-x-[30px] gap-y-5 xl:flex-row xl:gap-y-0">
          <div className="flex flex-1 flex-col">
            <Label>Check in</Label>
            <DatePicker />
          </div>

          <div className="flex flex-1 flex-col">
            <Label>Check out</Label>
            <DatePicker />
          </div>
        </div>
      </div>

      <div className="flex flex-col">
        <div className="mb-[24px] flex flex-1 flex-col">
          <Label>Guests</Label>
          <GuestSelect />
        </div>

        <div className="mb-[24px] flex items-center gap-x-3">
          <Checkbox id="terms" />
          <Label htmlFor="terms" className="mb-0 font-semibold">
            Pay when checking in?
          </Label>
        </div>

        <Button size="lg" variant="accent">
          Search Hotel
        </Button>
      </div>
    </div>
  )
}

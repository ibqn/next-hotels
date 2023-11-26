'use client'

import { useState } from 'react'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { Button } from '@/components/ui/button'
import { cn } from '@/utils'
import format from 'date-fns/format'
import { Calendar as CalendarIcon } from 'lucide-react'
import { Calendar } from '@/components/ui/calendar'

type Props = {}

export const DatePicker = (props: Props) => {
  const [date, setDate] = useState<Date>()

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          // variant="ghost"
          className={cn(
            'w-full justify-between text-left font-medium',
            !date && 'text-black'
          )}
        >
          {!!date ? format(date, 'd MMM') : <span>Pick a date</span>}
          <CalendarIcon className="mr-2 h-5 w-5 text-black" />
        </Button>
      </PopoverTrigger>

      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  )
}

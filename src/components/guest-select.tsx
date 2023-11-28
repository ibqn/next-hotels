import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

type Props = {}

export const GuestSelect = (props: Props) => {
  return (
    <Select>
      <SelectTrigger>
        <SelectValue placeholder="How many guests?" />
      </SelectTrigger>

      <SelectContent>
        <SelectGroup>
          <SelectLabel>Guests</SelectLabel>

          {Array.from({ length: 5 }).map((_, index) => (
            <SelectItem key={index} value={`${index + 1}`}>
              {index + 1}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}

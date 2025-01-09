import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { useDispatch, useSelector } from "react-redux"
import { IRootState } from "src/lib/store"
import { setBookingDate } from "src/lib/slices/bookingDate"

export function DatePicker() {
  const date = useSelector((state: IRootState) => state.bookingDate)
  const dispatch = useDispatch()
  const setDate = (val: Date | undefined) => {
    if (!val) {
      return
    }
    dispatch(setBookingDate(val?.toISOString()))
  }
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-52 justify-start text-left font-normal",
            !date && "text-muted-foreground"
          )}
        >
          <CalendarIcon />
          {date ? format(date, "PPP") : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={new Date(date)}
          onSelect={setDate}
          initialFocus
          disabled={(date) => {
            const currDate = new Date()
            currDate.setHours(0)
            currDate.setMinutes(0)
            currDate.setSeconds(0)
            currDate.setMilliseconds(0)
            return date < currDate
          }}
        />
      </PopoverContent>
    </Popover>
  )
}

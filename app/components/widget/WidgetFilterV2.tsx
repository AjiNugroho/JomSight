'use client'

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
    DropdownMenuGroup,
  } from "../CustomHook/DropdownCustom"
import * as React from "react"
import {HiOutlineDotsHorizontal} from 'react-icons/hi'
import { Calendar } from "../CustomHook/CalendarCustom"
import { DateRange } from "react-day-picker"
import { addDays, format } from "date-fns"
import {IoCalendarNumberOutline} from 'react-icons/io5'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../CustomHook/PopOverCustom"
const pastMonth = new Date(2020, 10, 15);
  
export default function WidgetFilterV2() {
  const [date, setDate] = React.useState<DateRange | undefined>({
    from: new Date(2022, 0, 20),
    to: addDays(new Date(2022, 0, 20), 20),
  })
  const defaultSelected: DateRange = {
    from: pastMonth,
    to: addDays(pastMonth, 4)
  };
  const [range, setRange] = React.useState<DateRange | undefined>(defaultSelected);
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild className="border-0">
          <span className="cursor-pointer"><HiOutlineDotsHorizontal size={20}/></span>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-32 border-0 bg-white h-[317px]">
          <DropdownMenuItem>
            Refresh
          </DropdownMenuItem> 
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem>
                Today
            </DropdownMenuItem>
            <DropdownMenuItem>
                Yesterday
            </DropdownMenuItem> 
            <DropdownMenuItem>
                Last Week
            </DropdownMenuItem>
            <DropdownMenuItem>
                Last Month
            </DropdownMenuItem> 
            <DropdownMenuItem>
                All Time
            </DropdownMenuItem> 
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
             
            <Popover>
              <PopoverTrigger asChild>
              <button
              id="date"
              className="justify-start text-left font-normal ps-2">
              Custom
              </button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0 bg-white/90 text-black -translate-y-[242px] -translate-x-full" align="start">
          
              
                <Calendar
                  initialFocus
                  mode="range"
                  defaultMonth={pastMonth}
                  selected={range}
                  onSelect={setRange}
                  numberOfMonths={2}
                />
              </PopoverContent>
            </Popover>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    )
  }
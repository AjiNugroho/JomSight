'use client'
import {Button, CalendarCell, CalendarGrid, Heading, RangeCalendar} from 'react-aria-components';

const DateRangeCustom = () => {
    return ( 
        <RangeCalendar className='flex flex-col gap-4 text-white'>
            <header className='flex justify-around'>
                <Button slot="previous">◀</Button>
                <Heading />
                <Button slot="next">▶</Button>
            </header>
            <CalendarGrid className=''>
                {(date) => <CalendarCell date={date} className='ps-3' />}
            </CalendarGrid>
        </RangeCalendar>
     );
}
 
export default DateRangeCustom;
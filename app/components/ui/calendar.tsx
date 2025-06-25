'use client'

import * as React from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { DayPicker, DayPickerProps } from 'react-day-picker'
import { cn } from './utils'
import { buttonVariants } from './button'

type CalendarProps = DayPickerProps

export function Calendar({
  className,
  classNames,
  components,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn('p-3', className)}
      classNames={{
        months: 'flex flex-col sm:flex-row gap-2',
        month: 'flex flex-col gap-4',
        caption: 'flex justify-center pt-1 relative items-center w-full',
        caption_label: 'text-sm font-medium',
        table: 'w-full border-collapse space-x-1',
        head_row: 'flex',
        head_cell: 'text-muted-foreground rounded-md w-8 font-normal text-[0.8rem]',
        row: 'flex w-full mt-2',
        cell: cn(
          'relative p-0 text-center text-sm focus-within:z-20 [&:has([aria-selected])]:bg-accent',
          props.mode === 'range'
            ? '[&:has(>.day-range-start)]:rounded-l-md [&:has(>.day-range-end)]:rounded-r-md first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md'
            : '[&:has([aria-selected])]:rounded-md'
        ),
        day: cn(
          buttonVariants({ variant: 'ghost' }),
          'size-8 p-0 font-normal aria-selected:opacity-100'
        ),
        day_today: 'bg-accent text-accent-foreground',
        day_outside: 'text-muted-foreground aria-selected:text-muted-foreground',
        day_disabled: 'opacity-50',
        day_range_start: 'aria-selected:bg-primary aria-selected:text-primary-foreground',
        day_range_middle: 'aria-selected:bg-accent aria-selected:text-accent-foreground',
        day_range_end: 'aria-selected:bg-primary aria-selected:text-primary-foreground',
        day_selected: 'bg-primary text-primary-foreground',
        ...classNames
      }}
      components={{
        PreviousMonthButton: ({ className: btnCls, ...rest }) => (
          <button
            type='button'
            aria-label='Mês anterior'
            className={cn(buttonVariants({ variant: 'outline' }), btnCls, 'size-7 bg-transparent p-0')}
            {...rest}
          >
            <ChevronLeft className='size-4' />
          </button>
        ),
        NextMonthButton: ({ className: btnCls, ...rest }) => (
          <button
            type='button'
            aria-label='Próximo mês'
            className={cn(buttonVariants({ variant: 'outline' }), btnCls, 'size-7 bg-transparent p-0')}
            {...rest}
          >
            <ChevronRight className='size-4' />
          </button>
        ),
        ...components
      }}
      {...props}
    />
  )
}

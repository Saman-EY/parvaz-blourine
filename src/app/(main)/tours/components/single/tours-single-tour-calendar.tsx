'use client';
import React, { MouseEventHandler, useRef, useState } from 'react';
import { Calendar } from 'react-multi-date-picker';
import DateObject from 'react-date-object';
import gregorian from 'react-date-object/calendars/gregorian';
import persian from 'react-date-object/calendars/persian';
import persian_fa from 'react-date-object/locales/persian_fa';
import { IconSelect } from '@/components/ui/icon-select';
import { Buttons } from '@/components/ui/buttons';
import { cn } from '@/lib/utils';
import { useMyDataCxt } from '@/store/data-context';

export const ToursSingleTourCalendar = () => {
  const { currentCourse } = useMyDataCxt();

  const from = currentCourse?.from_date.split(' ')[0];
  const to = currentCourse?.to_date.split(' ')[0];

  // // ۱. ساخت رفرنس
  // const calendarRef = useRef<React.Component>(null);
  //
  // // ۲. وضعیت تاریخ جاری (برای نمایش ماه و سال)
  // const [currentDate, setCurrentDate] = useState<DateObject>(
  //     new DateObject({calendar: persian})
  // );
  //
  // // تابع کمکی برای جابه‌جایی ماه
  // const changeMonth = (offset: number) => {
  //     if (!calendarRef.current) return;
  //     // گرفتن شیء DateObject داخلی
  //     const date = calendarRef.current.date as DateObject;
  //     // اعمال تغییر روی ماه
  //     calendarRef.current.set("month", date.month.number + offset);
  //     // به‌روزرسانی وضعیت برای نمایش
  //     setCurrentDate(new DateObject(calendarRef.current.date));
  // };
  const fixedRange: [DateObject, DateObject] = [
    new DateObject({ date: from ? new Date(from) : new Date(), calendar: gregorian }).convert(persian),
    new DateObject({ date: to ? new Date(to) : new Date(), calendar: gregorian }).convert(persian),
  ];
  return (
    <div className={'bg-[#F5F5F5] rounded-10 lg:rounded-15 py-5 flex-center flex-col relative z-0 w-full'}>
      <h2 className={'text-dark text-16 font-normal text-center col-span-full'}>تقویم اجرایی تور</h2>
      <Calendar
        className="!border-none w-full !bg-[#F5F5F5] tourCalneder"
        shadow={false}
        disableYearPicker={true}
        numberOfMonths={2}
        
        renderButton={(direction: string, handleClick: MouseEventHandler<HTMLButtonElement> | undefined) => (
          <Buttons
            variant={'icon-only'}
            className={cn(' top-14 text-xs p-1 z-10 bg-white border-[1px] w-fit')}
            onClick={handleClick}
          >
            {direction === 'right' ? (
              <IconSelect classes="" name="slider-left" />
            ) : (
              <IconSelect classes="" name="slider-right" />
            )}
          </Buttons>
        )}
        calendar={persian}
        locale={persian_fa}
        format="YYYY/MM/DD"
        weekDays={['ش', 'ی', 'د', 'س', 'چ', 'پ', 'ج']}
        readOnly={true}
        value={fixedRange[0]}
        mapDays={({ date, today, selectedDate, currentMonth, isSameDate }) => {
          let classes = ['!rounded-[5px] !text-14 ', date.month.index === currentMonth.index ? 'bg-[#D9D9D9] ' : ''];

          const startDate = fixedRange[0].toUnix();
          const endDate = fixedRange[1].toUnix();
          const selectedDateUnix = date.toUnix();
          if (selectedDateUnix >= startDate && selectedDateUnix <= endDate) {
            classes.push('border-2 border-primary');
          }
          if (isSameDate(date, selectedDate)) {
            classes.push('!bg-[#D9D9D9] !text-dark');
          }

          if (isSameDate(date, today)) {
            classes.push('');
          }

          if (date.weekDay.index === 6) {
            classes.push('!bg-[#0892DC] text-white');
          }

          return {
            className: classes.join(' '),
          };
        }}
      />
      <div className={'flex-center w-full justify-between text-14 mx-auto max-w-[230px]'}>
        <span className={'flex-center'}>
          <span className={'bg-primary h-1 w-1 p-1 rounded-full'} />
          <span className={'text-primary pr-1'}>روزهای اجرای تور</span>
        </span>
        <span className={'flex-center'}>
          <span className={'bg-info h-1 w-1 p-1 rounded-full'} />
          <span className={'text-info pr-1'}>روزهای تعطیل</span>
        </span>
      </div>
    </div>
  );
};

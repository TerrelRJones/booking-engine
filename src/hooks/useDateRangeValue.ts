import { useCallback, useMemo, useState } from 'react';
import { COLORS } from 'const/colors';
import { compareDesc, eachDayOfInterval, format } from 'date-fns';
import { DateData } from 'react-native-calendars';

export interface MarkedDatesProps {
  [key: string]: {
    color: string;
  };
}

export const useDateRangeValue = () => {
  const [startDay, setStartDay] = useState<Date | null>(null);
  const [endDay, setEndDay] = useState<Date | null>(null);

  const setDate = useCallback(
    (date: DateData, type: 'start' | 'end' | 'reset') => {
      switch (type) {
        case 'start':
          setStartDay(new Date(date?.dateString));
          break;

        case 'end':
          setEndDay(new Date(date?.dateString));
          break;

        case 'reset':
          setStartDay(new Date(date?.dateString));
          setEndDay(null);
          break;

        default:
          throw 'something went wrong';
      }
    },
    [],
  );

  const markedDates = useMemo(() => {
    const formatTweenDates = () => {
      if (startDay && endDay && compareDesc(startDay, endDay) >= 0) {
        const tweenDates = eachDayOfInterval({
          start: startDay,
          end: endDay,
        });
        const datesArr = tweenDates.map(date => format(date, 'yyyy-MM-dd'));
        return datesArr;
      } else if (startDay) {
        return [format(startDay, 'yyyy-MM-dd')];
      }
      return [];
    };
    const datesArr = formatTweenDates();

    const markedDatesObj: MarkedDatesProps = {};

    for (let date of datesArr) {
      markedDatesObj[date] = { color: COLORS.secondaryBgColor };
    }

    return { markedDatesObj, datesArr };
  }, [startDay, endDay]);

  return { startDay, endDay, markedDates, setDate };
};

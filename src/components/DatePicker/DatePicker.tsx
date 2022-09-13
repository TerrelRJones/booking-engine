import React, { useCallback } from 'react';
import CheckDate from 'components/CheckDate';
import { COLORS } from 'const/colors';
import { compareDesc, format } from 'date-fns';
import { MarkedDatesProps } from 'hooks/useDateRangeValue';
import { Flex } from 'native-base';
import { CalendarList, DateData } from 'react-native-calendars';

interface DatePickerProps {
  startDay: Date | null;
  endDay: Date | null;
  markedDatesObj: MarkedDatesProps;
  setDate: (date: DateData, type: 'start' | 'end' | 'reset') => void;
}

export const DatePicker = ({
  startDay,
  endDay,
  markedDatesObj,
  setDate,
}: DatePickerProps) => {
  const handleDayPress = useCallback(
    (date: DateData) => {
      if (!startDay) {
        return setDate(date, 'start');
      }
      if (compareDesc(startDay, new Date(date.dateString)) < 0) {
        return setDate(date, 'reset');
      }
      if (!endDay) {
        return setDate(date, 'end');
      }
      return setDate(date, 'reset');
    },

    [startDay, endDay, setDate],
  );

  return (
    <React.Fragment>
      <Flex direction="row" justify="space-between" mx={5} my={2}>
        <CheckDate
          checkType="In"
          date={(startDay && format(startDay, 'yyyy-MM-dd')) || ' '}
        />
        <CheckDate
          checkType="Out"
          date={(endDay && format(endDay, 'yyyy-MM-dd')) || ' '}
        />
      </Flex>
      <CalendarList
        theme={{
          calendarBackground: COLORS.bgColor,
          textSectionTitleColor: COLORS.textColor,
          dayTextColor: COLORS.textColor,
          monthTextColor: COLORS.textColor,
          textMonthFontWeight: 'bold',
        }}
        pastScrollRange={0}
        futureScrollRange={1}
        markingType={'period'}
        markedDates={markedDatesObj}
        onDayPress={handleDayPress}
        hideArrows={false}
        calendarHeight={1}
      />
    </React.Fragment>
  );
};

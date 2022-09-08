import React, { useCallback, useMemo, useState } from 'react';
import CheckDate from 'components/CheckDate';
import { COLORS } from 'const/colors';
import { Box, Flex } from 'native-base';
import { CalendarList, DateData } from 'react-native-calendars';

const useDateRangeValue = () => {
  const [startDay, setStartDay] = useState<Date | null>(null);
  const [endDay, setEndDay] = useState<Date | null>(null);

  const setDate = (date: DateData | undefined, type: 'start' | 'end') => {
    //comparisons in here
  };

  const markedDates = useMemo(() => {
    const tweenDates = [];
    return {};
  }, []);

  return { startDay, endDay, markedDates, setDate };
};

export const DatePicker = () => {
  const { startDay, endDay, markedDates, setDate } = useDateRangeValue();

  const handleDayPress = useCallback((date: DateData) => {
    if (!startDay) setDate(date, 'start');
    else if (!endDay) setDate(date, 'end');
    else setDate(date, 'start');

    //if select tween date, resets to start date
  }, []);

  return (
    <React.Fragment>
      <Flex direction="row" justify="space-between" mx={1} my={1}>
        <CheckDate checkType="In" date="2022-09-08" />
        <CheckDate checkType="Out" date="2022-09-10" />
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
        markedDates={{
          '2022-09-22': { startingDay: true, color: COLORS.secondaryBgColor },
          '2022-09-23': { color: COLORS.secondaryBgColor },
          '2022-09-30': {
            selected: true,
            endingDay: true,
            color: COLORS.secondaryBgColor,
          },
        }}
        onDayPress={handleDayPress}
        hideArrows={false}
        calendarHeight={1}
      />
    </React.Fragment>
  );
};

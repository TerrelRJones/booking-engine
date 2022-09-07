import React from 'react';
import { Box } from 'native-base';
import { CalendarList, DateData } from 'react-native-calendars';

export const DatePicker = () => {
  //get the initial date when pressed
  //get the final date when pressed again
  //get dates inbetween range
  //change styles for every date inbetween
  return (
    <React.Fragment>
      <CalendarList
        pastScrollRange={0}
        futureScrollRange={1}
        markingType={'period'}
        markedDates={{
          '2022-09-22': { startingDay: true, color: 'green' },
          '2022-09-23': { color: 'green' },
          '2022-09-30': {
            selected: true,
            endingDay: true,
            color: 'green',
          },
        }}
        onDayPress={(date: DateData) => console.log(date)}
      />
    </React.Fragment>
  );
};

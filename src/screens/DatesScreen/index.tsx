import React from 'react';
import DatePicker from 'components/DatePicker';
import TopNavigation from 'components/TopNavigation';
import { COLORS } from 'const/colors';
import { useDateRangeValue } from 'hooks/useDateRangeValue';
import { Box, Button } from 'native-base';
import { ScreenProps } from 'types/navigation';

interface DateScreenProps extends ScreenProps<'DatesScreen'> {}

const DatesScreen: React.FC<DateScreenProps> = ({
  navigation: { navigate },
}) => {
  const {
    startDay,
    endDay,
    markedDates: { markedDatesObj, datesArr },
    setDate,
  } = useDateRangeValue();

  return (
    <Box backgroundColor={COLORS.bgColor} flex={1}>
      <TopNavigation screenTitle="DatesScreen" />
      <DatePicker
        startDay={startDay}
        endDay={endDay}
        markedDatesObj={markedDatesObj}
        setDate={setDate}
      />
      <Button
        backgroundColor={COLORS.secondaryBgColor}
        borderRadius={0}
        onPress={() =>
          navigate('PaymentScreen', {
            datesArr,
            startDay,
            endDay,
          })
        }>
        Choose Dates
      </Button>
    </Box>
  );
};

export default DatesScreen;

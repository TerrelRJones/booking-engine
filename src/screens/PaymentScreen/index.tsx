import React from 'react';
import CheckDate from 'components/CheckDate';
import TopNavigation from 'components/TopNavigation';
import { COLORS } from 'const/colors';
import { format } from 'date-fns';
import { Box, Flex } from 'native-base';
import { ScreenProps } from 'types/navigation';

interface PaymentScreenProps extends ScreenProps<'PaymentScreen'> {}

const PaymentScreen: React.FC<PaymentScreenProps> = ({ route: { params } }) => {
  const { startDay, endDay } = params;
  return (
    <Box flex={1} backgroundColor={COLORS.bgColor}>
      <TopNavigation screenTitle={'Payment Screen'} />
      <Flex direction="row" justify="space-between" mx={5}>
        <CheckDate
          checkType="In"
          date={(startDay && format(startDay, 'yyyy-MM-dd')) || ' '}
        />
        <CheckDate
          checkType="Out"
          date={(endDay && format(endDay, 'yyyy-MM-dd')) || ' '}
        />
      </Flex>
    </Box>
  );
};

export default PaymentScreen;

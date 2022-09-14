import React from 'react';
import TopNavigation from 'components/TopNavigation';
import { Box } from 'native-base';
import { ScreenProps } from 'types/navigation';

interface PaymentScreenProps extends ScreenProps<'PaymentScreen'> {}

const PaymentScreen: React.FC<PaymentScreenProps> = ({}) => {
  return (
    <Box>
      <TopNavigation screenTitle={'Payment Screen'} />
    </Box>
  );
};

export default PaymentScreen;

import React, { FC } from 'react';
import { COLORS } from 'const/colors';
import { Box, Text } from 'native-base';
import { TouchableOpacity } from 'react-native';

interface RoomPreviewCardPropTypes {
  bedType: string;
  summary: string;
  price: string;
  onPress?: () => void;
}

const roomSummaryPreview = (summary: string) => {
  // eslint-disable-next-line curly
  if (summary.length > 20) return summary.slice(0, 60) + '...';
};

export const RoomPreviewCard: FC<RoomPreviewCardPropTypes> = ({
  bedType,
  summary,
  price,
  onPress,
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Box flexDirection="row" justifyContent="space-between">
        <Box width="80%">
          <Text
            textTransform="capitalize"
            color={COLORS.textColor}
            fontWeight="bold">
            {bedType}
          </Text>
          <Text color={COLORS.textColor} fontWeight="medium">
            {roomSummaryPreview(summary)}
          </Text>
        </Box>
        <Box>
          <Text color={COLORS.textColor} fontSize={15} fontWeight="bold">
            {price.split('.')[0]}
          </Text>
        </Box>
      </Box>
    </TouchableOpacity>
  );
};

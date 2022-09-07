import React from 'react';
import { COLORS } from 'const/colors';
import { Box, Input, SearchIcon } from 'native-base';

interface SearchInputProps {
  placeHolder: string;
}

export const SearchInput = ({ placeHolder }: SearchInputProps) => {
  return (
    <Box mt={3}>
      <Input
        placeholder={placeHolder}
        color={COLORS.textColor}
        borderRadius={10}
        fontSize={15}
        fontWeight="bold"
        InputRightElement={<SearchIcon mr={3} size={5} />}
      />
    </Box>
  );
};

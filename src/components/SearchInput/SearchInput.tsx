import React from 'react';
import { COLORS } from 'const/colors';
import { Box, Input, SearchIcon } from 'native-base';
import { KeyboardTypeIOS } from 'react-native';

interface SearchInputProps {
  placeHolder: string;
  keyBoardType?: KeyboardTypeIOS;
}

export const SearchInput = ({
  placeHolder,
  keyBoardType,
}: SearchInputProps) => {
  return (
    <Box mt={3}>
      {/* TODO: show keyboard pop-up on ios  */}
      <Input
        placeholder={placeHolder}
        color={COLORS.textColor}
        borderRadius={10}
        fontSize={15}
        fontWeight="bold"
        InputRightElement={<SearchIcon mr={3} size={5} />}
        clearButtonMode="always"
        keyboardType={keyBoardType}
        keyboardAppearance="dark"
      />
    </Box>
  );
};

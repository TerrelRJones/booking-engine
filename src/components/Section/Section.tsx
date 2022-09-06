import React from 'react';
import { Box } from 'native-base';

interface SectionProps {
  header: string;
  children: any;
}

export const Section = ({ header, children }: SectionProps) => {
  return (
    <>
      <Box>{header}</Box>
      <Box>{children}</Box>
    </>
  );
};

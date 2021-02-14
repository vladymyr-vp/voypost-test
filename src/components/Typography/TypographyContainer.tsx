import React from 'react';
import TypographyEl from './Typography';
import Box from '../Box/Box';

const TypographyContainer = (): JSX.Element => {
  return (
    <Box mt={2} display="grid" justifyContent="center">
      <Box mb={4}>
        <TypographyEl variant="h1">Typography</TypographyEl>
      </Box>
      <Box mb={4}>
        <TypographyEl variant="h2">Typography</TypographyEl>
      </Box>
      <Box mb={4}>
        <TypographyEl variant="h3">Typography</TypographyEl>
      </Box>
      <Box mb={4}>
        <TypographyEl variant="h4">Typography</TypographyEl>
      </Box>
      <Box mb={4}>
        <TypographyEl variant="h5">Typography</TypographyEl>
      </Box>
      <Box mb={4}>
        <TypographyEl variant="h6">Typography</TypographyEl>
      </Box>
      <Box mb={4}>
        <TypographyEl variant="subtitle1">Typography</TypographyEl>
      </Box>
      <Box mb={4}>
        <TypographyEl variant="subtitle2">Typography</TypographyEl>
      </Box>
    </Box>
  );
};

export default TypographyContainer;

import React from 'react';
import TypographyEl from './Typography';
import BoxComponent from '../Box/Box';

const TypographyContainer = (): JSX.Element => {
  return (
    <BoxComponent mb={1}>
      <TypographyEl variant="h1">Typography</TypographyEl>
      <TypographyEl variant="h2">Typography</TypographyEl>
      <TypographyEl variant="h3">Typography</TypographyEl>
      <TypographyEl variant="h4">Typography</TypographyEl>
      <TypographyEl variant="h5">Typography</TypographyEl>
      <TypographyEl variant="h6">Typography</TypographyEl>
      <TypographyEl variant="subtitle1">Typography</TypographyEl>
      <TypographyEl variant="subtitle2">Typography</TypographyEl>
    </BoxComponent>
  );
};

export default TypographyContainer;

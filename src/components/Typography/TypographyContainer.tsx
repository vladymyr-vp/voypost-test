import React from 'react';
import TypographyEl from './Typography';
import BoxComponent from '../Box/Box';

const TypographyContainer = () => {
  return (
    <BoxComponent mb={1}>
      <TypographyEl variant="h1" text="Typography" />
      <TypographyEl variant="h2" text="Typography" />
      <TypographyEl variant="h3" text="Typography" />
      <TypographyEl variant="h4" text="Typography" />
      <TypographyEl variant="h5" text="Typography" />
      <TypographyEl variant="h6" text="Typography" />
      <TypographyEl variant="subtitle1" text="Typography" />
      <TypographyEl variant="subtitle2" text="Typography" />
    </BoxComponent>
  );
};

export default TypographyContainer;

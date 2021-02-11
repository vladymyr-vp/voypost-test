import React from 'react';
import TypographyEl from './Typography';
import BoxComponent from '../Box/Box';

const TypographyContainer = () => {
  return (
    <BoxComponent>
      <TypographyEl variant="h1" />
      <TypographyEl variant="h2" />
      <TypographyEl variant="h3" />
      <TypographyEl variant="h4" />
      <TypographyEl variant="h5" />
      <TypographyEl variant="h6" />
      <TypographyEl variant="subtitle1" />
      <TypographyEl variant="subtitle2" />
    </BoxComponent>
  );
};

export default TypographyContainer;

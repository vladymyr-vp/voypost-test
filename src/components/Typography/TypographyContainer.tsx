import React from 'react';
import TypographyEl from './Typography';
import BoxComponent from '../Box/Box';

const TypographyContainer = () => {
  return (
    <BoxComponent
      boxprops={{
        display: 'flex',
        // justifyContent: 'space-evenly',
        flexWrap: 'wrap',
        width: '600px',
        height: '300px',
        alignItems: 'center',
      }}
    >
      <TypographyEl
        sizeVar="h1"
        styles={{ fontWeight: '900', fontSize: '36px', lineHeight: '42px' }}
      />
      <TypographyEl
        sizeVar="h3"
        styles={{ fontWeight: '700', fontSize: '32px', lineHeight: '37px' }}
      />
      <TypographyEl
        sizeVar="h4"
        styles={{ fontWeight: '500', fontSize: '28px', lineHeight: '33px' }}
      />
      <TypographyEl
        sizeVar="h5"
        styles={{ fontWeight: '500', fontSize: '24px', lineHeight: '28px' }}
      />
      <TypographyEl
        sizeVar="h6"
        styles={{ fontWeight: '500', fontSize: '18px', lineHeight: '21px' }}
      />
      <TypographyEl
        sizeVar="subtitle1"
        styles={{ fontWeight: '700', fontSize: '16px', lineHeight: '19px' }}
      />
      <TypographyEl
        sizeVar="subtitle2"
        styles={{ fontWeight: '700', fontSize: '14px', lineHeight: '16px' }}
      />
      <TypographyEl
        sizeVar="h1"
        styles={{ fontWeight: '300', fontSize: '14px', lineHeight: '16px' }}
      />
    </BoxComponent>
  );
};

export default TypographyContainer;

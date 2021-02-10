import React from 'react';
import ButtonEl from './Button';
import './Button.scss';
import BoxComponent from '../Box/Box';

// styles for different buttons
const bigP = '16px 107px';
const mediumP = '16px 38px';
const smallP = '10px 32px';
const bgGreen = '#6D9B12';
const bgBlue = '#4285F4';
const bgGray = '#E5E5E5';
const grayC = '#636363';

const Buttons = () => {
  return (
    <BoxComponent
      boxprops={{
        display: 'flex',
        justifyContent: 'space-evenly',
        flexWrap: 'wrap',
        width: '600px',
        height: '300px',
        alignItems: 'center',
      }}
    >
      <ButtonEl
        styles={{
          backgroundColor: bgGreen,
          padding: bigP,
        }}
      />
      <ButtonEl
        styles={{
          backgroundColor: bgGreen,
          padding: mediumP,
        }}
      />
      <ButtonEl
        styles={{
          backgroundColor: bgGreen,
          padding: smallP,
        }}
      />

      <ButtonEl
        styles={{
          backgroundColor: bgBlue,
          padding: bigP,
        }}
      />
      <ButtonEl
        styles={{
          backgroundColor: bgBlue,
          padding: mediumP,
        }}
      />
      <ButtonEl
        styles={{
          backgroundColor: bgBlue,
          padding: smallP,
        }}
      />
      <ButtonEl
        styles={{
          color: grayC,
          backgroundColor: bgGray,
          padding: bigP,
        }}
      />
      <ButtonEl
        styles={{
          color: grayC,
          backgroundColor: bgGray,
          padding: mediumP,
        }}
      />
      <ButtonEl
        styles={{
          color: grayC,
          backgroundColor: bgGray,
          padding: smallP,
        }}
      />
    </BoxComponent>
  );
};

export default Buttons;

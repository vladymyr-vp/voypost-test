import React from 'react';
import ButtonEl from './Button';
import BoxComponent from '../Box/Box';

const Buttons = (): JSX.Element => {
  return (
    <BoxComponent mb={1}>
      <BoxComponent mb={5}>
        <ButtonEl variant="outlined" size="large" color="primary">
          Sign Up
        </ButtonEl>
        <ButtonEl variant="contained" size="medium" color="primary">
          Sign Up
        </ButtonEl>
        <ButtonEl variant="contained" size="small" color="primary">
          Sign Up
        </ButtonEl>
      </BoxComponent>

      <BoxComponent mb={5}>
        <ButtonEl variant="outlined" size="large" color="secondary">
          Sign Up
        </ButtonEl>
        <ButtonEl variant="contained" size="medium" color="secondary">
          Sign Up
        </ButtonEl>
        <ButtonEl variant="contained" size="small" color="secondary">
          Sign Up
        </ButtonEl>
      </BoxComponent>

      <BoxComponent mb={5}>
        <ButtonEl variant="outlined" size="large" color="default">
          Sign Up
        </ButtonEl>
        <ButtonEl variant="contained" size="medium" color="default">
          Sign Up
        </ButtonEl>
        <ButtonEl variant="contained" size="small" color="default">
          Sign Up
        </ButtonEl>
      </BoxComponent>
    </BoxComponent>
  );
};

export default Buttons;

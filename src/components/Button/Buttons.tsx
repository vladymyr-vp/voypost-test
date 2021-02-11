import React from 'react';
import ButtonEl from './Button';
import BoxComponent from '../Box/Box';

const Buttons = () => {
  return (
    <BoxComponent>
      <ButtonEl variant="contained" size="large" color="primary" />
      <ButtonEl variant="contained" size="medium" color="primary" />
      <ButtonEl variant="contained" size="small" color="primary" />

      <ButtonEl variant="contained" size="large" color="secondary" />
      <ButtonEl variant="contained" size="medium" color="secondary" />
      <ButtonEl variant="contained" size="small" color="secondary" />

      <ButtonEl variant="contained" size="large" color="default" />
      <ButtonEl variant="contained" size="medium" color="default" />
      <ButtonEl variant="contained" size="small" color="default" />
    </BoxComponent>
  );
};

export default Buttons;

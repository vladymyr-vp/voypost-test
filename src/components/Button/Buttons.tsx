import React from 'react';
import ButtonEl from './Button';
import BoxComponent from '../Box/Box';

const Buttons = () => {
  return (
    <BoxComponent mb={1}>
      <BoxComponent mb={5}>
        <ButtonEl
          variant="outlined"
          size="large"
          color="primary"
          text="Sign Up"
        />
        <ButtonEl
          variant="contained"
          size="medium"
          color="primary"
          text="Sign Up"
        />
        <ButtonEl
          variant="contained"
          size="small"
          color="primary"
          text="Sign Up"
        />
      </BoxComponent>

      <BoxComponent mb={5}>
        <ButtonEl
          variant="outlined"
          size="large"
          color="secondary"
          text="Sign Up"
        />
        <ButtonEl
          variant="contained"
          size="medium"
          color="secondary"
          text="Sign Up"
        />
        <ButtonEl
          variant="contained"
          size="small"
          color="secondary"
          text="Sign Up"
        />
      </BoxComponent>

      <BoxComponent mb={5}>
        <ButtonEl
          variant="outlined"
          size="large"
          color="default"
          text="Sign Up"
        />
        <ButtonEl
          variant="contained"
          size="medium"
          color="default"
          text="Sign Up"
        />
        <ButtonEl
          variant="contained"
          size="small"
          color="default"
          text="Sign Up"
        />
      </BoxComponent>
    </BoxComponent>
  );
};

export default Buttons;

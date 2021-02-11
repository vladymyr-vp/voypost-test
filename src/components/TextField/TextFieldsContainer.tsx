import React from 'react';
import ValidationTextField from './TextField';
import BoxComponent from '../Box/Box';

const TextFieldsContainer = () => {
  return (
    <BoxComponent>
      <ValidationTextField label="Full Name" />
      <ValidationTextField label="Email Address" type="email" />
      <ValidationTextField
        label="Password (8 characters)"
        helpText="Please input your password! The password must be at least 8 characters!"
        type="password"
      />
    </BoxComponent>
  );
};

export default TextFieldsContainer;

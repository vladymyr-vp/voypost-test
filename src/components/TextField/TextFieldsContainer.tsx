import React from 'react';
import TextFieldEl from './TextField';
import BoxComponent from '../Box/Box';

const TextFieldsContainer = () => {
  return (
    <BoxComponent>
      <TextFieldEl label="Full Name" />
      <TextFieldEl label="Email Address" type="email" />
      <TextFieldEl
        label="Password (8 characters)"
        helpText="Please input your password! The password must be at least 8 characters!"
        type="password"
        error
      />
    </BoxComponent>
  );
};

export default TextFieldsContainer;

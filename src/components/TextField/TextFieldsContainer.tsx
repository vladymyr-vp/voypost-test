import React from 'react';
import TextFieldEl from './TextField';
import BoxComponent from '../Box/Box';

const TextFieldsContainer = () => {
  return (
    <BoxComponent mb={1}>
      <TextFieldEl label="Full Name" mb={10} />
      <TextFieldEl label="Email Address" type="email" mb={10} />
      <TextFieldEl
        mb={10}
        label="Password (8 characters)"
        helpText="Please input your password! The password must be at least 8 characters!"
        type="password"
        error
      />
    </BoxComponent>
  );
};

export default TextFieldsContainer;

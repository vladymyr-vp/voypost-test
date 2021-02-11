import React from 'react';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import InputLabel from '@material-ui/core/InputLabel';

interface ITextField {
  label: string;
  helpText?: string;
  type?: string;
  error?: boolean;
}

const TextFieldEl = ({ label, helpText, type, error }: ITextField) => {
  return (
    <FormControl error={error}>
      <InputLabel htmlFor="textField" shrink={true}>
        {label}
      </InputLabel>
      <TextField
        id="textField"
        placeholder="Placeholder"
        type={type}
        InputProps={{
          disableUnderline: true,
        }}
        InputLabelProps={{
          shrink: true,
        }}
      />
      <FormHelperText>{helpText}</FormHelperText>
    </FormControl>
  );
};

export default TextFieldEl;

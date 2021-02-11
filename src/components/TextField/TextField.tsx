import React from 'react';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import InputLabel from '@material-ui/core/InputLabel';
import BoxComponent from '../Box';

interface ITextField {
  label: string;
  helpText?: string;
  type?: string;
  error?: boolean;
  mb: number;
  id?: string | undefined;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  name?: string;
}

const TextFieldEl = ({
  label,
  helpText,
  type,
  error,
  mb,
  id,
  value,
  name,
  onChange,
}: ITextField) => {
  return (
    <BoxComponent mb={mb}>
      <FormControl error={error}>
        <InputLabel htmlFor="textField" shrink={true}>
          {label}
        </InputLabel>
        <TextField
          value={value}
          id={id ? id : 'textField'}
          placeholder="Placeholder"
          type={type}
          InputProps={{
            disableUnderline: true,
          }}
          InputLabelProps={{
            shrink: true,
          }}
          onChange={onChange}
        />
        <FormHelperText>{helpText}</FormHelperText>
      </FormControl>
    </BoxComponent>
  );
};

export default TextFieldEl;

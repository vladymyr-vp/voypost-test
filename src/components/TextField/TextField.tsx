import React from 'react';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';

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
  showIcon?: boolean;
  children?: React.ReactElement | string;
}

const TextFieldEl = ({
  label,
  helpText,
  type,
  error,
  mb,
  id,
  value,
  children,
  onChange,
}: ITextField): JSX.Element => {
  return (
    <BoxComponent mb={mb}>
      <FormControl error={error}>
        <TextField
          label={label}
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
          helperText={helpText}
        />
        {children}
      </FormControl>
    </BoxComponent>
  );
};

export default TextFieldEl;

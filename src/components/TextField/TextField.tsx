import React from 'react';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import IconButton from '@material-ui/core/IconButton';

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
  showIcon = false,
  onChange,
}: ITextField): JSX.Element => {
  const [showPassword, setShowpassword] = React.useState(false);

  const handleClickShowPassword = () => {
    setShowpassword(state => !state);
  };

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>,
  ): void => {
    event.preventDefault();
  };

  return (
    <BoxComponent mb={mb}>
      <FormControl error={error}>
        <TextField
          label={label}
          value={value}
          id={id ? id : 'textField'}
          placeholder="Placeholder"
          type={showPassword ? 'text' : type}
          InputProps={{
            disableUnderline: true,
          }}
          InputLabelProps={{
            shrink: true,
          }}
          onChange={onChange}
        />
        {showIcon && (
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
            >
              {showPassword ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
        )}
        <FormHelperText>{helpText}</FormHelperText>
      </FormControl>
    </BoxComponent>
  );
};

export default TextFieldEl;

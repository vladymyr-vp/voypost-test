import React from 'react';
import TextField from '@material-ui/core/TextField';
import {
  withStyles,
  makeStyles,
  createStyles,
  fade,
} from '@material-ui/core/styles';
import FilledInput from '@material-ui/core/FilledInput';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';

interface ITextField {
  label: string;
  helpText?: string;
  type?: string;
}

const useStylesReddit = makeStyles(theme =>
  createStyles({
    root: {
      overflow: 'hidden',
      borderRadius: 4,
      backgroundColor: '#EFEFEF',
      '&$focused': {
        backgroundColor: '#fff',
        border: '1px solid #6D9B12',
      },
      '&$:invalid': {
        backgroundColor: '#fff',
        border: '1px solid #FF0000',
      },
    },
  }),
);

const TextFieldEl = ({ label, helpText, type }: ITextField) => {
  const classes = useStylesReddit();
  return (
    <FormControl error>
      <InputLabel htmlFor="textField" shrink={true}>
        {label}
      </InputLabel>
      <TextField
        id="textField"
        placeholder="Placeholder"
        type={type}
        InputProps={{
          disableUnderline: true,
          classes,
        }}
        InputLabelProps={{
          shrink: true,
        }}
        FormHelperTextProps={{
          className: '-error',
        }}
      />
      <FormHelperText>{helpText}</FormHelperText>
    </FormControl>
  );
};

export default TextFieldEl;

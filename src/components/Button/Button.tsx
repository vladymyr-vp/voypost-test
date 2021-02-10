import React from 'react';
import Button from '@material-ui/core/Button';
import { useTheme } from '@material-ui/core/styles';

interface IButton {
  styles: {
    color?: string;
    backgroundColor: string;
    padding: string;
  };
}

const ButtonEl = ({ styles }: IButton) => {
  const theme = useTheme();

  return <Button style={{ ...styles }}>Sign Up</Button>;
};

export default ButtonEl;

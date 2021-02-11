import React from 'react';
import Button from '@material-ui/core/Button';

interface IButton {
  color: 'inherit' | 'default' | 'primary' | 'secondary' | undefined;
  size: 'small' | 'medium' | 'large' | undefined;
  variant: 'text' | 'outlined' | 'contained' | undefined;
}

const ButtonEl = ({ variant, size, color }: IButton) => {
  return (
    <Button variant={variant} size={size} color={color}>
      Sign Up
    </Button>
  );
};

export default ButtonEl;

import React from 'react';
import Button from '@material-ui/core/Button';

interface IButton {
  color: 'inherit' | 'default' | 'primary' | 'secondary' | undefined;
  size: 'small' | 'medium' | 'large' | undefined;
  variant: 'text' | 'outlined' | 'contained' | undefined;
  text: string;
  disabled?: boolean;
  onClick?: (e: any) => void;
}

const ButtonEl = ({
  variant,
  size,
  color,
  text,
  disabled,
  onClick,
}: IButton) => {
  return (
    <Button
      variant={variant}
      size={size}
      color={color}
      disabled={disabled}
      onClick={onClick}
    >
      {text}
    </Button>
  );
};

export default ButtonEl;

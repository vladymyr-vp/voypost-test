import React from 'react';
import Button from '@material-ui/core/Button';

interface IButton {
  color: 'inherit' | 'default' | 'primary' | 'secondary';
  size: 'small' | 'medium' | 'large';
  variant: 'text' | 'outlined' | 'contained';
  disabled?: boolean;
  onClick?: (e: any) => void;
  children?: React.ReactElement | string;
}

const ButtonEl = ({
  variant,
  size,
  color,
  disabled,
  onClick,
  children,
}: IButton): JSX.Element => {
  return (
    <Button
      variant={variant}
      size={size}
      color={color}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};

export default ButtonEl;

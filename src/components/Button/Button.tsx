import React from 'react';
import Button from '@material-ui/core/Button';
import Typography from '../Typography/Typography';

interface IButton {
  color: 'inherit' | 'default' | 'primary' | 'secondary' | undefined;
  size: 'small' | 'medium' | 'large' | undefined;
  variant: 'text' | 'outlined' | 'contained' | undefined;
  text: string;
  disabled?: boolean;
  onClick?: (e: any) => void;
  icon?: string;
}

const ButtonEl = ({
  variant,
  size,
  color,
  text,
  disabled,
  onClick,
  icon,
}: IButton): JSX.Element => {
  return (
    <Button
      variant={variant}
      size={size}
      color={color}
      disabled={disabled}
      onClick={onClick}
    >
      {icon && <img src={icon} alt="buttonIcon"></img>}{' '}
      <Typography variant="body2" text={text} />
    </Button>
  );
};

export default ButtonEl;

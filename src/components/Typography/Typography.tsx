import React from 'react';
import Typography from '@material-ui/core/Typography';

interface ITypog {
  variant:
    | 'inherit'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'subtitle1'
    | 'subtitle2'
    | 'body1'
    | 'body2'
    | 'caption'
    | 'button'
    | 'overline'
    | 'srOnly'
    | undefined;
  text: string;
}

const TypographyEl = ({ variant, text }: ITypog) => {
  return <Typography variant={variant}>{text}</Typography>;
};

export default TypographyEl;

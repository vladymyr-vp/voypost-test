import React from 'react';
import Typography from '@material-ui/core/Typography';

interface ITypography {
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
  children: React.ReactElement | string;
}

const TypographyEl = ({ variant, children }: ITypography): JSX.Element => {
  return <Typography variant={variant}>{children}</Typography>;
};

export default TypographyEl;

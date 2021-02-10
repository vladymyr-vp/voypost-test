import React from 'react';
import Typography from '@material-ui/core/Typography';

interface ITypog {
  styles?: any;
  sizeVar?:
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
}

const TypographyEl = ({ sizeVar, styles }: ITypog) => {
  return (
    <Typography variant={sizeVar} style={{ ...styles }}>
      Typography
    </Typography>
  );
};

export default TypographyEl;

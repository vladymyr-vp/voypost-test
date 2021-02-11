import React from 'react';
import Box from '@material-ui/core/Box';
import { useTheme } from '@material-ui/core';

interface IBoxComponent {
  children: React.ReactElement[] | React.ReactElement;
  mb: number;
}

const BoxComponent = ({ children, mb }: IBoxComponent): JSX.Element => {
  const theme = useTheme();

  return (
    <Box
      mb={mb}
      style={{
        display: 'flex',
        justifyContent: 'space-evenly',
        flexWrap: 'wrap',
        width: '600px',
        alignItems: 'center',
        margin: theme.spacing(mb, 'auto'),
      }}
    >
      {children}
    </Box>
  );
};

export default BoxComponent;

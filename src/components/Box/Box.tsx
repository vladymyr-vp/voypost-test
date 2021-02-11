import React from 'react';
import Box from '@material-ui/core/Box';

interface IBoxComponent {
  children: React.ReactElement[] | React.ReactElement;
}

const BoxComponent = ({ children }: IBoxComponent) => {
  return (
    <Box
      style={{
        display: 'flex',
        justifyContent: 'space-evenly',
        flexWrap: 'wrap',
        width: '600px',
        height: '300px',
        alignItems: 'center',
      }}
    >
      {children}
    </Box>
  );
};

export default BoxComponent;

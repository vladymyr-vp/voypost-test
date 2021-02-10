import React from 'react';
import Box from '@material-ui/core/Box';

interface IBoxComponent {
  children: React.ReactElement[] | React.ReactElement;
  boxprops: object;
}

const BoxComponent = ({ children, boxprops }: IBoxComponent) => {
  return <Box style={{ ...boxprops }}>{children}</Box>;
};

export default BoxComponent;

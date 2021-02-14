import React from 'react';
import ButtonEl from './Button';
import Box from '../Box/Box';

const Buttons = (): JSX.Element => {
  return (
    <Box mt={2} display="grid" justifyContent="center">
      <Box mb={5}>
        <Box mr={3.75} display="inline-block">
          <ButtonEl variant="outlined" size="large" color="primary">
            Sign Up
          </ButtonEl>
        </Box>
        <Box mr={3.75} display="inline-block">
          <ButtonEl variant="contained" size="medium" color="primary">
            Sign Up
          </ButtonEl>
        </Box>

        <ButtonEl variant="contained" size="small" color="primary">
          Sign Up
        </ButtonEl>
      </Box>

      <Box mb={5}>
        <Box mr={3.75} display="inline-block">
          <ButtonEl variant="outlined" size="large" color="secondary">
            Sign Up
          </ButtonEl>
        </Box>

        <Box mr={3.75} display="inline-block">
          <ButtonEl variant="contained" size="medium" color="secondary">
            Sign Up
          </ButtonEl>
        </Box>

        <ButtonEl variant="contained" size="small" color="secondary">
          Sign Up
        </ButtonEl>
      </Box>

      <Box mb={5}>
        <Box mr={3.75} display="inline-block">
          <ButtonEl variant="outlined" size="large" color="default">
            Sign Up
          </ButtonEl>
        </Box>

        <Box mr={3.75} display="inline-block">
          <ButtonEl variant="contained" size="medium" color="default">
            Sign Up
          </ButtonEl>
        </Box>

        <ButtonEl variant="contained" size="small" color="default">
          Sign Up
        </ButtonEl>
      </Box>
    </Box>
  );
};

export default Buttons;

import React, { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Buttons from 'components/Button/Buttons';
import './App.scss';
import TextFieldsContainer from 'components/TextField/TextFieldsContainer';
import TypographyContainer from 'components/Typography/TypographyContainer';

const theme = createMuiTheme({
  overrides: {
    MuiButton: {
      root: {
        fontFamily: 'Roboto',
        fontSize: '16px',
        lineHeight: '19px',
        color: '#FFFFFF',
        border: 'none',
        borderRadius: '6px',
        boxShadow: '0',
        textTransform: 'inherit',
        backgroundColor: '#6D9B12',
      },
    },
    MuiInputBase: {
      root: {
        padding: '17px 14px',
        '&$ input:focused': {
          border: '1px solid #6D9B12',
        },
      },
    },
    MuiInputLabel: {
      root: {
        disableAnimation: true,
        '&$focused': {
          color: '#6D9B12',
        },
        '&$error': {
          color: '#FF0000',
        },
      },
    },
    MuiFormHelperText: {
      root: {
        '&$focused': {
          color: '#6D9B12',
        },
        '&$error': {
          color: '#FF0000',
        },
      },
    },
    MuiFormControl: {
      root: {
        margin: '0',
        '&$error': {
          backgroundColor: '#fff',
          border: '1px solid #FF0000',
        },
      },
    },
    MuiTextField: {
      root: {
        background: '#EFEFEF',
        borderRadius: '6px',
        width: '522px',
        height: '50px',
        border: 'none',
      },
    },
    MuiTypography: {
      root: {
        display: 'block',
        width: '100%',
        marginBottom: '24px',
      },
    },
  },
});

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Switch>
        <Route path="/story-book" exact>
          <ThemeProvider theme={theme}>
            <Buttons />
            <TextFieldsContainer />
            <TypographyContainer />
          </ThemeProvider>
        </Route>
      </Switch>
    </Suspense>
  );
}

export default App;

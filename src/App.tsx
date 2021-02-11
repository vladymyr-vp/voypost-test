import React, { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import Buttons from 'components/Button/Buttons';
import TextFieldsContainer from 'components/TextField/TextFieldsContainer';
import TypographyContainer from 'components/Typography/TypographyContainer';
import theme from './theme';

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

import React, { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import Buttons from 'components/Button';
import TextFieldsContainer from 'components/TextField';
import TypographyContainer from 'components/Typography';
import theme from './theme';
import Signup from './components/pages/Signup';

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
        <Route path="/signup">
          <ThemeProvider theme={theme}>
            <Signup />
          </ThemeProvider>
        </Route>
      </Switch>
    </Suspense>
  );
}

export default App;

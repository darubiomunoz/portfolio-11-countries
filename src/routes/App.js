import { useSelector } from 'react-redux';

import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ThemeProvider } from 'styled-components';

import GlobalStyle from "../styles/GlobalStyles";

import { light, dark } from '../styles/Themes';

import HomePage from "../pages/HomePage";
import Country from "../pages/Country";

const App = () => {
  const theme = useSelector(state => state.theme);

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme === 'light' ? light : dark}>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/country/:alphacode" component={Country} />
        </Switch>
        <GlobalStyle />
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;

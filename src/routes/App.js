import { BrowserRouter, Switch, Route } from "react-router-dom";

import GlobalStyle from "../styles/GlobalStyles";

import HomePage from "../pages/HomePage";
import Country from "../pages/Country";
import NotFound from "../pages/NotFound";

const App = () => {
  return (
    <BrowserRouter>
      <>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/country/id:" component={Country} />
          <Route component={NotFound} />
        </Switch>
        <GlobalStyle />
      </>
    </BrowserRouter>
  );
};

export default App;

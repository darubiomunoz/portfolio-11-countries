import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./routes/App";

import store from "./app/store";
import { Provider } from "react-redux";

ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
  document.getElementById("root")
);

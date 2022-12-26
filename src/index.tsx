import "./styles/global.css";
import "./styles/reset.css";

import { Box, Image } from "./components";
import styled, { css } from "styled-components";

import Main from "./Main";
import { Provider } from "react-redux";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { createRoot } from "react-dom/client";
import images from "./constants/images";
import { store } from "./store/store";

const DivStyled = styled.div`
  font-size: 3em;
  color: red;
`;

const App = () => (
  <Provider store={store}>
    <Router>
      <Main />
    </Router>
  </Provider>
);

const container = document.getElementById("root");
const root = createRoot(container!); // createRoot(container!) if you use TypeScript
root.render(<App />);

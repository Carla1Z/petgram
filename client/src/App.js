import React from 'react';
import { GlobalStyle } from "./styles/GlobalStyles.js";
import { Home } from "./views/Home";
import { Logo } from './components/Logo';

function App() {
  return (
    <div>
      <GlobalStyle />
      <Logo />
      {/* <ListOfCategories /> */}
      <Home />
    </div>
  );
}

export default App;

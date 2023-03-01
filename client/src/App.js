import React from 'react';
import { GlobalStyle } from "./GlobalStyles";
import { Home } from "./views/Home";

function App() {
  return (
    <div>
      <GlobalStyle />
      {/* <ListOfCategories /> */}
      <Home />
    </div>
  );
}

export default App;

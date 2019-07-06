import React from 'react';
import { Router } from '@reach/router';

import Header from './common/header';
import Home from './common/Home';
import About from './common/About';

function App() {
  return (
    <React.Fragment>
      <Header />
      <Router>
        <Home path="/" />
        <About path="about" />
      </Router>
    </React.Fragment>
  );
}

export default App;

import React from 'react';
import './App.css';

import {Home} from "./pages/Home";
import {Counter} from "./features/Counter";

function App() {
  return (
    <Home>
      <Counter />
    </Home>
  );
}

export default App;

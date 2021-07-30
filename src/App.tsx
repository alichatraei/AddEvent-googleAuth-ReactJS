import React from 'react';
import { HeaderLayout } from './Layout'
import { Home } from './Views';
import './App.css';

function App() {
  return (
    <div className="app">
      <HeaderLayout />
      <Home />
    </div>
  );
}

export default App;

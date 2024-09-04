import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Unregistered from './pages/Unregistered.tsx';

import './styles/App.scss';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Unregistered />
      </BrowserRouter>
    </div>
  );
}

export default App;

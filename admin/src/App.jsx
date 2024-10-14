import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Admin from './Pages/Admin/Admin';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Admin />
      </div>
    </BrowserRouter>
  );
}

export default App;

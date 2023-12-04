import React from 'react';
import { Route, Routes } from 'react-router-dom';
import routes from 'routes';

function App() {
  return (
    <Routes>
      <Route path='/' element={<routes.Main />} />
    </Routes>
  );
}

export default App;

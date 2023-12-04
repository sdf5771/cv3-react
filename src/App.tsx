import React from 'react';
import { Route, Routes } from 'react-router-dom';
import routes from 'routes';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path='/' element={<routes.Main />} />
      </Routes>
    </QueryClientProvider>
  );
}

export default App;

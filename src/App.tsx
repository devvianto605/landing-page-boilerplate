import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import { MainLayout } from './layouts';
import { HomePage, PrivacyPolicyPage } from './pages';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

const App = (): JSX.Element => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route element={<HomePage />} path='/' />
            <Route element={<PrivacyPolicyPage />} path='/privacyPolicy' />
          </Route>
          <Route element={<Navigate replace to='/' />} path='/*' />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;

import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { SigninContainer } from './components/organisms/Auth/SigninContainer';
import { SignupCard } from './components/organisms/Auth/SignupCard';
import { Auth } from '@/pages/Auth/Auth';
import { Route, Routes } from 'react-router-dom';
import { Notfound } from '@/pages/NotFound/NotFound';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { SignupContainer } from './components/organisms/Auth/SignupContainer';
import { Toaster } from '@/components/ui/toaster';

function App() {
  const queryClient = new QueryClient();

  const [count, setCount] = useState(0)

  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
          <Route path="/auth/signup" element={<Auth><SignupContainer /></Auth>} />
          <Route path="/auth/signin" element={<Auth><SigninContainer /></Auth>} />
          <Route path="/home" element={<Auth><h1>Home</h1></Auth>} />
          <Route path="/*" element={<Notfound />} />
      </Routes>
      <Toaster />
    </QueryClientProvider>
    
    
  )
}

export default App

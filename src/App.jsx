import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { SigninCard } from './components/organisms/Auth/SigninCard';
import { SignupCard } from './components/organisms/Auth/SignupCard';
import { Auth } from '@/pages/Auth/Auth';
import { Route, Routes } from 'react-router-dom';
import { Notfound } from '@/pages/NotFound/NotFound';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path="/auth/signup" element={<Auth><SignupCard /></Auth>} />
      <Route path="/auth/signin" element={<Auth><SigninCard /></Auth>} />

      <Route path="/*" element={<Notfound />} />
    </Routes>
    
  )
}

export default App

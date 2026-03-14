import { Route, Routes } from 'react-router-dom';
import { SigninContainer } from '@/components/organisms/Auth/SigninContainer';
import { SignupContainer } from '@/components/organisms/Auth/SignupContainer';
import { Auth } from '@/pages/Auth/Auth';
import { Notfound } from '@/pages/Notfound/Notfound';
import { ProtectedRoute } from './components/molecules/ProtectedRoute/ProtectedRoute';
import { Home } from './pages/Home/Home';
import { WorkspaceLayout } from './pages/Workspace/Layout';
import { JoinPage } from './pages/Workspace/JoinPage';
import { Channel } from './pages/Workspace/Channel/Channel';
import { Payments } from './pages/Payments/Payments';

export const AppRoutes = () => {
    return (
        <Routes>
          <Route path="/auth/signup" element={<Auth><SignupContainer /></Auth>} />
          <Route path="/auth/signin" element={<Auth><SigninContainer /></Auth>} />
          <Route path="/home" element={<ProtectedRoute><Auth><Home /></Auth></ProtectedRoute>} />
          
          <Route path="/workspaces/:workspaceId" element={<ProtectedRoute><WorkspaceLayout>Workspace</WorkspaceLayout></ProtectedRoute>} />
          <Route 
            path="/workspaces/:workspaceId/channels/:channelId"
            element={<ProtectedRoute><WorkspaceLayout><Channel /></WorkspaceLayout></ProtectedRoute>}

          />
          <Route path="/makepayment" element={<ProtectedRoute><Payments /></ProtectedRoute>} />
           <Route path="/workspaces/join/:workspaceId" element={<JoinPage />} />
          <Route path="/*" element={<Notfound />} />
        </Routes>
    );
};
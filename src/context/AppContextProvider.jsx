import { WorkspacePreferencesModalContextProvider } from './WorkspacePreferencesModalContext';
import combineContext from '@/utils/combineContext';
import { AuthContextProvider } from './AuthContext';
import { CreateWorkspaceContextProvider } from './CreateWorkspaceContext';
import { CreateChannelContextProvider } from './CreateChannelContext';
import { WorkspaceContextProvider } from '@/context/WorkspaceContext';
import { SocketContextProvider } from './SocketContext';

export const AppContextProvider = combineContext(
    SocketContextProvider,
    AuthContextProvider,
    WorkspaceContextProvider,
    CreateWorkspaceContextProvider,
    WorkspacePreferencesModalContextProvider,
    CreateChannelContextProvider
); 
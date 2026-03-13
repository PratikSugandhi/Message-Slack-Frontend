import { WorkspacePreferencesModalContextProvider } from './WorkspacePreferencesModalContext';
import combineContext from '@/utils/combineContext';
import { AuthContextProvider } from './AuthContext';
import { CreateWorkspaceContextProvider } from './CreateWorkspaceContext';
import { CreateChannelContextProvider } from './CreateChannelContext';
import { WorkspaceContextProvider } from '@/hooks/context/WorkspaceContext';

export const AppContextProvider = combineContext(
    AuthContextProvider,
    WorkspaceContextProvider,
    CreateWorkspaceContextProvider,
    WorkspacePreferencesModalContextProvider,
    CreateChannelContextProvider
); 
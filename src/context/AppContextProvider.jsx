import { WorkspacePreferencesModalContextProvider } from './WorkspacePreferencesModalContext';
import combineContext from '@/utils/combineContext';
import { AuthContextProvider } from './AuthContext';
import { CreateWorkspaceContextProvider } from './CreateWorkspaceContext';
import { CreateChannelContextProvider } from './CreateChannelContext';

export const AppContextProvider = combineContext(
    AuthContextProvider,
    CreateWorkspaceContextProvider,
    WorkspacePreferencesModalContextProvider,
    CreateChannelContextProvider
); 
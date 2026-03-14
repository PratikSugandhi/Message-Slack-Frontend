import { WorkspacePreferencesModalContextProvider } from './WorkspacePreferencesModalContext';
import combineContext from '@/utils/combineContext';
import { AuthContextProvider } from './AuthContext';
import { CreateWorkspaceContextProvider } from './CreateWorkspaceContext';
import { CreateChannelContextProvider } from './CreateChannelContext';
import { WorkspaceContextProvider } from '@/context/WorkspaceContext';
import { SocketContextProvider } from './SocketContext';
import { ChannelMessagesProvider } from './ChannelMessages';

export const AppContextProvider = combineContext(
    ChannelMessagesProvider,
    SocketContextProvider,
    AuthContextProvider,
    WorkspaceContextProvider,
    CreateWorkspaceContextProvider,
    WorkspacePreferencesModalContextProvider,
    CreateChannelContextProvider
); 
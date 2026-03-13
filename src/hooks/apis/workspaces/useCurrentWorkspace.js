import { useContext } from 'react';

import WorkspaceContext from '@/hooks/context/WorkspaceContext';

export const useCurrentWorkspace = () => {
    return useContext(WorkspaceContext);
};
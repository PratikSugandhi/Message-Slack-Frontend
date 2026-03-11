import { useMutation, useQueryClient } from '@tanstack/react-query';
import { addChannelToWorkspaceRequest } from '@/apis/workspaces';
import { useAuth } from '@/hooks/context/useAuth';

export const useAddChannelToWorkspace = (workspaceId) => {
    const queryClient = useQueryClient();
    const { auth } = useAuth();

    const { isPending, isSuccess, error, mutateAsync: addChannelMutation } = useMutation({
        mutationFn: (channelName) =>
            addChannelToWorkspaceRequest({
                workspaceId,
                channelName,
                token: auth?.token
            }),
        onSuccess: () => {
            // Refetch workspace details so new channel appears in UI
            queryClient.invalidateQueries([`fetchWorkspaceById-${workspaceId}`]);
        }
    });

    return {
        isPending,
        isSuccess,
        error,
        addChannelMutation
    };
};


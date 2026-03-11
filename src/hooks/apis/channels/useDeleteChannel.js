import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteChannelRequest } from '@/apis/channels';
import { useAuth } from '@/hooks/context/useAuth';

export const useDeleteChannel = (workspaceId) => {
    const queryClient = useQueryClient();
    const { auth } = useAuth();

    const { isPending, isSuccess, error, mutateAsync: deleteChannelMutation } = useMutation({
        mutationFn: (channelId) =>
            deleteChannelRequest({
                channelId,
                token: auth?.token
            }),
        onSuccess: () => {
            // refresh workspace details so the deleted channel disappears
            queryClient.invalidateQueries([`fetchWorkspaceById-${workspaceId}`]);
        }
    });

    return {
        isPending,
        isSuccess,
        error,
        deleteChannelMutation
    };
};


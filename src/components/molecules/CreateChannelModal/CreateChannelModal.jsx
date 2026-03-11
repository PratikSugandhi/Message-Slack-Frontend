import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { useCreateChannelModal } from '@/hooks/context/useCreateChannelModal';
import { useAddChannelToWorkspace } from '@/hooks/apis/workspaces/useAddChannelToWorkspace';
import { useToast } from '@/hooks/use-toast';
import { useWorkspacePreferencesModal } from '@/hooks/context/useWorkspacePreferencesModal';
import { useDeleteChannel } from '@/hooks/apis/channels/useDeleteChannel';
import { useGetWorkspaceById } from '@/hooks/apis/workspaces/useGetWorkspaceById';

export const CreateChannelModal = () => {
    
    const { openCreateChannelModal, setOpenCreateChannelModal } = useCreateChannelModal();
    const { workspace } = useWorkspacePreferencesModal();
    const workspaceId = workspace?._id;
    const { toast } = useToast();

    const { isPending, addChannelMutation } = useAddChannelToWorkspace(workspaceId);
    const { deleteChannelMutation, isPending: isDeleting } = useDeleteChannel(workspaceId);
    const { workspace: latestWorkspace } = useGetWorkspaceById(workspaceId, { enabled: openCreateChannelModal });

    const [channelName, setChannelName] = useState('');

    function handleClose() {
        setOpenCreateChannelModal(false);
    }

    async function handleFormSubmit(e) {
        e.preventDefault();
        if (!workspaceId) {
            toast({
                title: 'No active workspace found',
                type: 'error'
            });
            return;
        }
        try {
            await addChannelMutation(channelName);
            setChannelName('');
            toast({
                title: 'Channel created successfully',
                type: 'success'
            });
        } catch (error) {
            console.log('Error creating channel', error);
            toast({
                title: error?.message || 'Error creating channel',
                type: 'error'
            });
        }
    }

    async function handleDeleteChannel(channelId) {
        try {
            await deleteChannelMutation(channelId);
            toast({
                title: 'Channel deleted successfully',
                type: 'success'
            });
        } catch (error) {
            console.log('Error deleting channel', error);
            toast({
                title: error?.message || 'Error deleting channel',
                type: 'error'
            });
        }
    }

    return (
        <Dialog
            open={openCreateChannelModal}
            onOpenChange={handleClose}
        >
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Create a channel</DialogTitle>
                </DialogHeader>

                <div className="space-y-4">
                    <form onSubmit={handleFormSubmit}>
                        <Input 
                            value={channelName}
                            onChange={(e) => setChannelName(e.target.value)}
                            minLength={3}
                            placeholder="Channel Name e.g. team-announcements"
                            required
                            disabled={isPending}
                        />

                        <div className='flex justify-end mt-4'>
                            <Button disabled={isPending}>
                                Create Channel
                            </Button>
                        </div>
                    </form>

                    {latestWorkspace?.channels?.length > 0 && (
                        <div className="mt-4">
                            <p className="text-sm font-semibold mb-2">Existing channels</p>
                            <div className="space-y-1 max-h-48 overflow-y-auto">
                                {latestWorkspace.channels.map((channel) => (
                                    <div
                                        key={channel._id}
                                        className="flex items-center justify-between text-sm text-[#f9edffcc] bg-slack-medium/60 px-3 py-2 rounded"
                                    >
                                        <span>#{channel.name}</span>
                                        <Button
                                            type="button"
                                            variant="outline"
                                            size="sm"
                                            disabled={isDeleting}
                                            className="text-red-500 border-red-500/60 hover:bg-red-500/10"
                                            onClick={() => handleDeleteChannel(channel._id)}
                                        >
                                            Delete
                                        </Button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </DialogContent>
            
        </Dialog>
    );
};
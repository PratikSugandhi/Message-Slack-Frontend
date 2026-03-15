import { Editor } from '@/components/atoms/Editor/Editor';
import { useAuth } from '@/hooks/context/useAuth';
import { useCurrentWorkspace } from '@/hooks/context/useCurrentWorkspace';
import { useSocket } from '@/hooks/context/useSocket';

export const ChatInput = ({ replyingTo, onClearReply }) => {
    const { socket, currentChannel } = useSocket();
    const { auth } = useAuth();
    const { currentWorkspace } = useCurrentWorkspace();

    async function handleSubmit({ body }) {
        console.log(body);
        socket?.emit(
            'NewMessage',
            {
                channelId: currentChannel,
                body,
                senderId: auth?.user?._id,
                workspaceId: currentWorkspace?._id,
            },
            (data) => {
                console.log('Message sent', data);
            }
        );
        if (onClearReply) {
            onClearReply();
        }
    }

    return (
        <div className="px-5 w-full pb-4 pt-2 bg-slate-900 border-t border-slate-800">
            {replyingTo && (
                <div className="mb-2 flex items-center justify-between rounded-md border border-emerald-500/60 bg-slate-900/80 px-3 py-1.5 text-xs text-emerald-50">
                    <div className="flex flex-col border-l-2 border-emerald-400 pl-2">
                        <span className="text-[11px] font-semibold text-emerald-300">
                            Replying to {replyingTo.authorName}
                        </span>
                        <span className="line-clamp-1 text-[11px] text-slate-200 italic opacity-90">
                            {replyingTo.preview}
                        </span>
                    </div>
                    <button
                        type="button"
                        onClick={onClearReply}
                        className="ml-2 text-[11px] text-slate-400 hover:text-slate-50"
                    >
                        Cancel
                    </button>
                </div>
            )}
            <div className="rounded-xl border border-slate-600 bg-slate-950 shadow-sm">
                <Editor
                    placeholder="Type a message..."
                    onSubmit={handleSubmit}
                    onCancel={() => {}}
                    disabled={false}
                    defaultValue=""
                />
            </div>
        </div>
    );
};
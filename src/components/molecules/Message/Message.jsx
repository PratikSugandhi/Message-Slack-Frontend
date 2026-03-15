import { MessageRenderer } from '@/components/atoms/MessageRenderer/MessageRenderer';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { CornerUpRightIcon } from 'lucide-react';

export const Message = ({
    authorImage,
    authorName,
    createdAt,
    body,
    onReply,
}) => {
    const handleReplyClick = () => {
        if (onReply) {
            let plainPreview = 'Message';
            try {
                const value = typeof body === 'string' ? JSON.parse(body) : body;
                if (value && Array.isArray(value.ops)) {
                    plainPreview = value.ops.map((op) => op.insert || '').join('').trim();
                }
            } catch {
                plainPreview = typeof body === 'string' ? body : 'Message';
            }
            onReply({
                authorName,
                preview: plainPreview,
            });
        }
    };

    return (
        <div className="flex flex-col gap-1.5 rounded-lg bg-slate-900/60 p-2 px-3 text-slate-50 shadow-sm hover:bg-slate-900/80 group relative">
            <div className="flex items-start gap-2">
                <button>
                    <Avatar>
                        <AvatarImage className="rounded-md" src={authorImage} />
                        <AvatarFallback className="rounded-md bg-sky-500 text-white text-sm">
                            {authorName.charAt(0).toUpperCase()}
                        </AvatarFallback>
                    </Avatar>
                </button>

                <div className="flex flex-col w-full overflow-hidden">
                    <div className="flex items-center gap-2 text-xs">
                        <button className="font-bold text-emerald-200 hover:underline">{authorName}</button>
                        <button className="text-xs text-slate-400 hover:underline">
                            {createdAt || 'Just now'}
                        </button>
                    </div>

                    <div className="mt-0.5 text-sm leading-snug text-slate-100">
                        <MessageRenderer value={body} />
                    </div>
                </div>

                <button
                    type="button"
                    onClick={handleReplyClick}
                    className="invisible ml-2 flex h-6 items-center rounded-full border border-slate-700/80 bg-slate-900 px-2 text-[11px] text-slate-300 opacity-0 transition group-hover:visible group-hover:opacity-100 hover:border-emerald-500/70 hover:text-emerald-300"
                >
                    <CornerUpRightIcon className="mr-1 h-3.5 w-3.5" />
                    Reply
                </button>
            </div>
        </div>
    );
};
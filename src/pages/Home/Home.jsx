import { UserButton } from '@/components/atoms/UserButton/UserButton';
import { useFetchWorkspace } from '@/hooks/apis/workspaces/useFetchWorkspace';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCreateWorkspaceModal } from '@/hooks/context/useCreateWorkspaceModal';
import { Button } from '@/components/ui/button';
import { PricingDialog } from '@/components/organisms/Pricing/PricingDialog';

export const Home = () => {
    const { isFetching, workspaces } = useFetchWorkspace();
    const { setOpenCreateWorkspaceModal } = useCreateWorkspaceModal();
    const navigate = useNavigate();
    const [showPricing, setShowPricing] = useState(false);

    useEffect(() => {

        if(isFetching) return;

        console.log('Workspaces downloaded is', workspaces);

        if(workspaces.length === 0 || !workspaces) {
            console.log('No workspaces found, creating one');
             setOpenCreateWorkspaceModal(true);
        }
        else{
            navigate(`/workspaces/${workspaces[0]._id}`);
        }

    }, [isFetching, workspaces]);
    return (
        <div className="flex min-h-[calc(100vh-40px)] flex-col items-center justify-center bg-slate-950 text-slate-50">
            <div className="mb-6 flex items-center gap-3">
                <h1 className="text-2xl font-semibold tracking-tight">Welcome to Message Slack</h1>
                <UserButton />
            </div>
            <p className="mb-4 max-w-md text-center text-sm text-slate-300">
                Create or open a workspace to start collaborating with your team. You can upgrade any time with simple,
                predictable pricing.
            </p>
            <Button
                variant="outline"
                className="rounded-full border-emerald-500/60 px-5 text-xs font-semibold text-emerald-200 hover:bg-emerald-500/10"
                onClick={() => setShowPricing(true)}
            >
                View pricing
            </Button>

            <PricingDialog open={showPricing} onOpenChange={setShowPricing} />
        </div>
    );
};
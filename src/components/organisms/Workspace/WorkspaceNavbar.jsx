import { InfoIcon, LucideLoader2, SearchIcon, SparklesIcon } from 'lucide-react';
import { useParams , useNavigate} from 'react-router-dom';
import { useAuth } from '@/hooks/context/useAuth';
import { Button } from '@/components/ui/button';
import { useGetWorkspaceById } from '@/hooks/apis/workspaces/useGetWorkspaceById';
import { useEffect, useState } from 'react';
import { PricingDialog } from '@/components/organisms/Pricing/PricingDialog';

export const WorkspaceNavbar = () => {

    const { workspaceId } = useParams();

    const navigate = useNavigate();
    const { logout } = useAuth();
    const { isFetching, workspace, error, isSuccess } = useGetWorkspaceById(workspaceId);
    const [showPricing, setShowPricing] = useState(false);

    useEffect(() => {
        
        if(!isFetching && !isSuccess && error) {
            console.log('Error fetching workspace', error.status);
            if(error.status === 403) {
                logout();
                navigate('/');
            }
        }
    }, [ isSuccess, error, isFetching]);

    if(isFetching) {
        return <LucideLoader2 className="animate-spin ml-2" />;
    }

    return (
        <>
            <nav
                className='flex items-center justify-center h-10 px-3 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 border-b border-slate-800/70 shadow-sm'
            >
                <div className='flex flex-1 items-center gap-2'>
                    <div className='flex h-6 w-6 items-center justify-center rounded-md bg-emerald-500/20 text-emerald-300'>
                        <SparklesIcon className='size-3.5' />
                    </div>
                    <span className='hidden text-xs font-medium text-slate-200 md:inline'>
                        {workspace?.name || 'Workspace'}
                    </span>
                </div>
                <div>
                    <Button
                        size='sm'
                        className='bg-accent/25 hover:bg-accent/15 w-full justify-start h-7 px-2 rounded-full border border-slate-700/80'
                    >
                        <SearchIcon className='size-4 text-white mr-2' />
                        <span className='text-white text-xs'>
                            Search {workspace?.name || 'Workspace'} 
                        </span>
                    </Button>
                </div>

                <div
                    className='ml-auto flex flex-1 items-center justify-end gap-1.5'
                >
                    <Button
                        variant='default'
                        size='sm'
                        className='hidden rounded-full bg-emerald-500 px-3 text-[11px] font-semibold text-slate-950 shadow-emerald-500/40 hover:bg-emerald-400 md:inline-flex'
                        onClick={() => setShowPricing(true)}
                    >
                        Pricing
                    </Button>
                    <Button
                        variant='transparent'
                        size='iconSm'
                    >
                        <InfoIcon className='size-5 text-white' />
                    </Button>
                </div>
            </nav>
            <PricingDialog open={showPricing} onOpenChange={setShowPricing} />
        </>
    );
};
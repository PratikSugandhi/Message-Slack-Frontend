import { BellIcon,HomeIcon, MessageSquareIcon, MoreHorizontalIcon } from 'lucide-react';
import { UserButton } from '@/components/atoms/UserButton/UserButton';
import { SidebarButton } from '@/components/molecules/SidebarButton/SidebarButton';
import { WorkspaceSwitcher } from '@/components/organisms/Workspace/WorkspaceSwitcher'

export const WorkspaceSidebar = () => {
    return (
        <aside
            className="w-[70px] h-full bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 flex flex-col gap-y-4 items-center pt-[10px] pb-[5px] border-r border-slate-800"
        >
            <WorkspaceSwitcher />
            <SidebarButton 
                Icon={HomeIcon}
                label="Home"
            />

            <SidebarButton
                Icon={MessageSquareIcon}
                label="DMs"
            />

            <SidebarButton
                Icon={BellIcon}
                label="Notifications"
            />

            <SidebarButton
                Icon={MoreHorizontalIcon}
                label="More"
            />

            <div className='flex flex-col items-center justify-center mt-auto mb-5 gap-y-1'>
                <UserButton />
            </div>
            
        </aside>
    );
};
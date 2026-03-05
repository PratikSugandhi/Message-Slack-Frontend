import { WorkspaceSidebar } from '@/components/organisms/Workspace/WorkspaceSidebar';
import { WorkspaceNavbar } from '@/components/organisms/Workspace/WorkspaceNavbar';

export const WorkspaceLayout = ({ children }) => {
    return (
        <div className="h-[100vh]">
            <WorkspaceNavbar />
            <div className="flex h-[calc(100vh-40px)]">
                <WorkspaceSidebar />
                {children}
            </div>
        </div>
    );
};
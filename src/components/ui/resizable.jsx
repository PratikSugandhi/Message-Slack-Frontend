import { GripVertical } from "lucide-react"
// CHANGE: Import the new named exports directly
import { Group, Panel, Separator } from "react-resizable-panels"

import { cn } from "@/lib/utils"

export const ResizablePanelGroup = ({
  className,
  ...props
}) => (
  <Group // CHANGE: Use 'Group' instead of 'PanelGroup'
    className={cn(
      "flex h-full w-full data-[panel-group-direction=vertical]:flex-col",
      className
    )}
    {...props} />
)

export const ResizablePanel = Panel // CHANGE: Mapping to 'Panel'

export const ResizableHandle = ({
  withHandle,
  className,
  ...props
}) => (
  <Separator // CHANGE: Use 'Separator' instead of 'PanelResizeHandle'
    className={cn(
      "relative flex w-px items-center justify-center bg-border ...",
      className
    )}
    {...props}>
    {withHandle && (
      <div className="z-10 flex h-4 w-3 items-center justify-center rounded-sm border bg-border">
        <GripVertical className="h-2.5 w-2.5" />
      </div>
    )}
  </Separator>
)
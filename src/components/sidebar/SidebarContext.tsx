import type { ReactNode } from "react";
import { useState } from "react";
import type { Id } from "../../types/types";
import { type SidebarContextValue, SidebarContext } from "../../hooks/useSidebarContext";

interface SidebarContextProps {
  collapsed?: boolean; // Controlled collapsed state.
  collapsedDefault?: boolean; //Initial value for uncontrolled mode.
  onCollapsedChange?: (collapsed: boolean) => void;
  activeIds?: Id[]; //Controlled active menu path.
  onActiveChange?: (ids: Id[]) => void;
  children: ReactNode;
}

export function SidebarProvider({
  collapsed,
  collapsedDefault = false,
  onCollapsedChange,
  activeIds,
  onActiveChange,
  children
}: SidebarContextProps) {
  const [internalCollapsed, setInternalCollapsed] = useState(collapsedDefault);
  const [internalActiveIds, setInternalActiveIds] = useState<Id[]>([]);
  const [openedMenuId, setOpenedMenuId] = useState<string | null>(null);

  const isCollapsed = collapsed ?? internalCollapsed;
  const currentActiveIds = activeIds ?? internalActiveIds;

  const toggleCollapse = () => {
    const nextValue = !isCollapsed;

    if (onCollapsedChange) {
      onCollapsedChange(nextValue);
    } else {
      setInternalCollapsed(nextValue);
    }
  };

  const setActiveMenuIds = (ids: Id[]) => {
    if (onActiveChange) {
      onActiveChange(ids);
    } else {
      setInternalActiveIds(ids);
    }
  };

  const value: SidebarContextValue = {
    isCollapsed,
    toggleCollapse,
    openedMenuId,
    setOpenedMenuId,
    activeMenuIds: currentActiveIds,
    setActiveMenuIds,
  };

  return (
    <SidebarContext.Provider value={value}>
      { children }
    </SidebarContext.Provider>
  )
}
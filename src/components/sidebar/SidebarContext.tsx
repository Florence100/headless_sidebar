import type { ReactNode } from "react";
import { useState } from "react";
import type { Id } from "../../types/types";
import { type SidebarContextValue, SidebarContext } from "../../hooks/useSidebarContext";

interface SidebarContextProps {
  collapsed?: boolean;
  collapsedDefault?: boolean;
  onCollapsedChange?: (collapsed: boolean) => void;
  activeIds?: Id[];
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
  const [internalActiveIds, setInternalActiveIds] = useState<Id[] | null>(null);
  const [openedMenuId, setOpenedMenuId] = useState<string | null>(null);

  const toggleCollapse = () => {
    if (collapsed !== undefined && onCollapsedChange !== undefined) {
      return onCollapsedChange(!collapsed);
    }

    return setInternalCollapsed(!internalCollapsed);
  }

  const value: SidebarContextValue = {
    isCollapsed: collapsed !== undefined && onCollapsedChange !== undefined 
      ? collapsed 
      : internalCollapsed,
    toggleCollapse: toggleCollapse,
    sidebarNodes: new Map(),
    openedMenuId: openedMenuId,
    setOpenedMenuId: setOpenedMenuId,
    activeMenuIds: activeIds !== undefined && onActiveChange !== undefined 
      ? activeIds as Id[] | null 
      : internalActiveIds,
    setActiveMenuIds: activeIds !== undefined && onActiveChange !== undefined 
      ? onActiveChange 
      : setInternalActiveIds,
  }

  return (
    <SidebarContext.Provider value={value}>
      { children }
    </SidebarContext.Provider>
  )
}
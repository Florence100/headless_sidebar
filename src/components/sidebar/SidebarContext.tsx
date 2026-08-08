import type { ReactNode } from "react";
import { createContext, useState, useContext } from "react";
import { type SidebarNode } from "./types";

interface SidebarContextValue {
  isCollapsed: boolean;
  toggleCollapse(): void;
  sidebarNodes: Map<string, SidebarNode>;
  openedMenuId: Id | null;
  setOpenedMenuId(id: Id): void;
}

const SidebarContext = createContext<SidebarContextValue | null>(null);

export function useSidebarContext() {
  const context = useContext(SidebarContext);

  if (!context) {
    throw new Error(
      "useSidebar must be used inside SidebarProvider"
    );
  }

  return context;
}

interface SidebarContextProps {
  collapsed?: boolean;
  collapsedDefault?: boolean;
  onCollapsedChange?: (collapsed: boolean) => void;
  children: ReactNode;
}

export function SidebarProvider({
  collapsed,
  collapsedDefault = false,
  onCollapsedChange,
  children
}: SidebarContextProps) {
  const [internalCollapsed, setInternalCollapsed] = useState(collapsedDefault);
  const [openedMenuId, setOpenedMenuId] = useState<string | null>(null);

  const isControled = collapsed !== undefined && onCollapsedChange !== undefined ? true : false;

  const toggleCollapse = () => {
    if (collapsed !== undefined && onCollapsedChange !== undefined) {
      return onCollapsedChange(!collapsed);
    }

    return setInternalCollapsed(!internalCollapsed);
  }

  const value: SidebarContextValue = {
    isCollapsed: isControled ? collapsed as boolean : internalCollapsed,
    toggleCollapse: toggleCollapse,
    sidebarNodes: new Map(),
    openedMenuId: openedMenuId,
    setOpenedMenuId: setOpenedMenuId,
  }

  return (
    <SidebarContext.Provider value={value}>
      { children }
    </SidebarContext.Provider>
  )
}
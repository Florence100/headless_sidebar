import { createContext, useContext } from "react";
import type { Id } from "../types/types";

export interface SidebarContextValue {
  isCollapsed: boolean;
  toggleCollapse(): void;
  openedMenuId: Id | null;
  setOpenedMenuId(id: Id | null): void;
  activeMenuIds: Id[];
  setActiveMenuIds(ids: Id[]): void;
}

export const SidebarContext = createContext<SidebarContextValue | null>(null);

export function useSidebarContext() {
  const context = useContext(SidebarContext);

  if (!context) {
    throw new Error(
      "useSidebar must be used inside SidebarProvider"
    );
  }

  return context;
}
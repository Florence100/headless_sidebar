import { createContext, useContext } from "react";
import type { Id, MenuStyles } from "../types/types";

export interface HeadlessMenuContextValue {
  isCollapsed: boolean;
  toggleCollapse(): void;
  openedMenuId: Id | null;
  setOpenedMenuId(id: Id | null): void;
  activeMenuIds: Id[];
  setActiveMenuIds(ids: Id[]): void;
  styles: MenuStyles;
}

export const HeadlessMenuContext = createContext<HeadlessMenuContextValue | null>(null);

export function useHeadlessMenuContext() {
  const context = useContext(HeadlessMenuContext);

  if (!context) {
    throw new Error(
      "useSidebar must be used inside SidebarProvider"
    );
  }

  return context;
}
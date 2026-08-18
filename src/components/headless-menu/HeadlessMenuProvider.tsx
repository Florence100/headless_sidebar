import type { ReactNode } from "react";
import { useState } from "react";
import type { Id, MenuStyles } from "./types/types";
import { type HeadlessMenuContextValue, HeadlessMenuContext } from "./hooks/useHeadlessMenuContext";

interface HeadlessMenuProviderProps {
  collapsed?: boolean; // Controlled collapsed state.
  onCollapsedChange?: (collapsed: boolean) => void;
  activeIds?: Id[]; //Controlled active menu path.
  onActiveChange?: (ids: Id[]) => void;
  styles?: MenuStyles;
  children: ReactNode;
}

export function HeadlessMenuProvider({
  collapsed,
  onCollapsedChange,
  activeIds,
  onActiveChange,
  styles,
  children
}: HeadlessMenuProviderProps) {

  const [internalCollapsed, setInternalCollapsed] = useState(false);
  const [internalActiveIds, setInternalActiveIds] = useState<Id[]>([]);
  const [openedMenuId, setOpenedMenuId] = useState<Id | null>(null);

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

  const value: HeadlessMenuContextValue = {
    isCollapsed,
    toggleCollapse,
    openedMenuId,
    setOpenedMenuId,
    activeMenuIds: currentActiveIds,
    setActiveMenuIds,
    styles: styles ?? {},
  };

  return (
    <HeadlessMenuContext.Provider value={value}>
      { children }
    </HeadlessMenuContext.Provider>
  )
}
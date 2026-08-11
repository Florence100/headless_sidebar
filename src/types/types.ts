import { type ReactNode } from "react";

export interface SidebarItemProps {
  id: string;
  parentId?: string;
  icon?: ReactNode;
  label?: string;
  className?: string;
  children?: ReactNode;
  onSelect?: (id: Id) => void;
}

export type Id = string;
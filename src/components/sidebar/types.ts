import { type ReactNode } from "react";

export interface SidebarItemProps {
  id: string;
  parentId?: string;
  icon?: ReactNode;
  label?: string;
  className?: string;
  children?: ReactNode;
}

export type Id = string;

export interface SidebarNode {
  id: Id;
  parentId?: Id;
}
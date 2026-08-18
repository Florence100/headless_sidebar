import { type ReactNode } from "react";

export type Id = string;

export interface HeadlessItemProps {
  id: Id;
  parentId?: Id;
  icon?: ReactNode;
  label?: string;
  className?: string;
  children?: ReactNode;
  onSelect?: (id: Id) => void;
}

export interface MenuStyles {
  menu?: string;
  item?: string;
  group?: string;
  submenuItem?: string;
  toggle?: string;
}
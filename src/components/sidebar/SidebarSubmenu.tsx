import type { ReactNode } from "react";
import { Children, isValidElement, cloneElement, type ReactElement } from "react";
import { useSidebarContext } from "./SidebarContext";
import { type SidebarItemProps } from "./types";

interface SidebarSubmenuProps {
  children: ReactNode;
  parentId: string;
  isOpen?: boolean;
}

export function SidebarSubmenu ({
  children,
  parentId,
  isOpen = false,
}: SidebarSubmenuProps) {
  const { isCollapsed } = useSidebarContext();

  return (
    <div className={`submenu ${isCollapsed && "collapsed"}`}>
      {isOpen && Children.map(children, (child) => {
        if (isValidElement(child)) {
          return cloneElement(child as ReactElement<SidebarItemProps>, { 
            parentId: parentId,
          });
        }
        return child;
      })}
    </div>
  )
}
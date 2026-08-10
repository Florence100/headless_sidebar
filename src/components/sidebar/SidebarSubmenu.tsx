import type { ReactNode } from "react";
import { Children, isValidElement, cloneElement, type ReactElement } from "react";
import { useSidebarContext } from "../../hooks/useSidebarContext";
import { type SidebarItemProps } from "../../types/types";

interface SidebarSubmenuProps {
  children: ReactNode;
  parentId: string;
  isOpen?: boolean;
  label?: string;
}

export function SidebarSubmenu ({
  children,
  parentId,
  isOpen = false,
  label,
}: SidebarSubmenuProps) {
  const { isCollapsed, setOpenedMenuId } = useSidebarContext();

  const onMouseLeaveHandler = () => {
    if (isCollapsed) {
      setOpenedMenuId(null);
    }
  }

  return (
    <div onMouseLeave={onMouseLeaveHandler} className={`submenu ${isCollapsed ? "collapsed" : ""}`}>
      {isCollapsed && <div className="submenuTitle">{label}</div>}
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
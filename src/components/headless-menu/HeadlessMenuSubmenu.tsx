import type { ReactNode } from "react";
import { Children, isValidElement, cloneElement, type ReactElement } from "react";
import { useHeadlessMenuContext } from "./hooks/useHeadlessMenuContext";
import type { HeadlessItemProps, Id } from "./types/types";

interface HeadlessMenuSubmenuProps {
  children: ReactNode;
  parentId: Id;
  isOpen?: boolean;
  label?: string;
}

export function HeadlessMenuSubmenu ({
  children,
  parentId,
  isOpen = false,
  label,
}: HeadlessMenuSubmenuProps) {
  const { isCollapsed, setOpenedMenuId, styles } = useHeadlessMenuContext();

  const onMouseLeaveHandler = () => {
    // In collapsed mode, leaving the submenu closes it.
    if (isCollapsed) {
      setOpenedMenuId(null);
    }
  }

  return (
    <div 
      onMouseLeave={onMouseLeaveHandler}
      className={`
        submenu 
        ${styles.group}
        ${isCollapsed ? "collapsed" : ""}
      `}
      data-open={isOpen}
      data-collapsed={isCollapsed}
    >
      {isCollapsed && label && (
        <span className="submenu-title">{label}</span>
      )}
      
      {Children.map(children, (child) => {
        if (isValidElement(child)) {
          return cloneElement(child as ReactElement<HeadlessItemProps>, { 
            parentId: parentId,
          });
        }
        return child;
      })}
    </div>
  )
}
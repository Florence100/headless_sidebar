import { Children, useEffect, useCallback, useMemo } from "react";
import { useSidebarContext } from "./SidebarContext";
import { SidebarSubmenu } from "./SidebarSubmenu";
import type { SidebarItemProps, SidebarNode, Id } from "./types";

export function SidebarItem ({
  id,
  parentId,
  icon,
  label,
  className = '',
  children,
}: SidebarItemProps) {
  const { isCollapsed, sidebarNodes, openedMenuId, setOpenedMenuId } = useSidebarContext();
  const hasSubmenu = Children.count(children) > 0;

  const currentNode: SidebarNode = useMemo(() => {
    return {
      id: id,
      parentId: parentId ? parentId : undefined,
    }
  }, [id, parentId]);

  const isSubmenu = currentNode.parentId !== undefined;

  const registerNode = useCallback((node: SidebarNode) => {
    sidebarNodes.set(id, node);
  }, [sidebarNodes, id]);

  const unRegisterNode = useCallback((id: Id) => {
    sidebarNodes.delete(id);
  }, [sidebarNodes]);

  const onClickHandler = () => {
    setOpenedMenuId(id);
  }

  useEffect(() => {
    registerNode(currentNode);

    return () => {
      unRegisterNode(id);
    }
  }, [currentNode, registerNode, unRegisterNode, id]);

  return (
    <div className={className}>
      {!isSubmenu && (
        <span onClick={onClickHandler} className="menu">
          {icon && <span>{ icon }</span>}
          {label && !isCollapsed && <span>{ label }</span>}
        </span>
      )}

      {isSubmenu && (
        <span className="submenuItem">
          {icon && <span>{ icon }</span>}
          {label && <span>{ label }</span>}
        </span>
      )}

      {hasSubmenu && openedMenuId === id && (
        <SidebarSubmenu
          parentId={id}
          isOpen={true}
        >
          {children}
        </SidebarSubmenu>
      )}
    </div>
  )
}
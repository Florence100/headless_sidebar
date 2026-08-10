import { Children, useEffect, useCallback, useMemo, useState } from "react";
import { useSidebarContext } from "../../hooks/useSidebarContext";
import { SidebarSubmenu } from "./SidebarSubmenu";
import type { SidebarItemProps, SidebarNode, Id } from "../../types/types";

export function SidebarItem ({
  id,
  parentId,
  icon,
  label,
  className = '',
  children,
}: SidebarItemProps) {
  const { 
    isCollapsed,
    sidebarNodes,
    openedMenuId,
    setOpenedMenuId,
    activeMenuIds,
    setActiveMenuIds,
  } = useSidebarContext();

  const [showTooltip, setShowTooltip] = useState(false);

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

  useEffect(() => {
    registerNode(currentNode);

    return () => {
      unRegisterNode(id);
    }
  }, [currentNode, registerNode, unRegisterNode, id]);

  const onClickHandler = () => {
    setOpenedMenuId(id);

    if (parentId) {
      const ids = [parentId, id];
      setActiveMenuIds(ids);
    } else {
      setActiveMenuIds([id]);
    }
  }

  const onMouseEnterHandler = () => {
    if (isCollapsed) {
      setOpenedMenuId(id);
      if (!hasSubmenu) {
        setShowTooltip(true);
      }
    }
  }

  const onMouseLeaveHandler = () => {
    setShowTooltip(false);
  }

  return (
    <div className={className} data-active={activeMenuIds?.includes(id)}>
      {!isSubmenu && (
        <span 
          onClick={onClickHandler} 
          onMouseEnter={onMouseEnterHandler} 
          onMouseLeave={onMouseLeaveHandler}
          className="menu"
        >
          {icon && <span>{ icon }</span>}
          {label && !isCollapsed && <span>{ label }</span>}
        </span>
      )}

      {showTooltip && <div className="tooltip">{label}</div>}

      {isSubmenu && (
        <span onClick={onClickHandler} className="submenuItem" >
          {icon && <span>{ icon }</span>}
          {label && <span>{ label }</span>}
        </span>
      )}

      {!isCollapsed && hasSubmenu && activeMenuIds?.includes(id) && (
        <SidebarSubmenu
          parentId={id}
          isOpen={true}
        >
          {children}
        </SidebarSubmenu>
      )}

      {isCollapsed && hasSubmenu && openedMenuId === id && (
        <SidebarSubmenu
          parentId={id}
          isOpen={true}
          label={label}
        >
          {children}
        </SidebarSubmenu>
      )}
    </div>
  )
}
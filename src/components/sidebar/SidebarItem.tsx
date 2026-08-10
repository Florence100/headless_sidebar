import { Children, useState } from "react";
import { useSidebarContext } from "../../hooks/useSidebarContext";
import { SidebarSubmenu } from "./SidebarSubmenu";
import type { SidebarItemProps } from "../../types/types";

export function SidebarItem({
  id,
  parentId,
  icon,
  label,
  className="",
  children,
}: SidebarItemProps) {
  const {
    isCollapsed,
    openedMenuId,
    setOpenedMenuId,
    activeMenuIds,
    setActiveMenuIds,
  } = useSidebarContext();

  const [showTooltip, setShowTooltip] = useState(false);

  const hasSubmenu = Children.count(children) > 0;
  const isSubmenu = parentId !== undefined;

  const isActive = activeMenuIds.includes(id);

  const isOpen = hasSubmenu && openedMenuId === id;

  const onClickHandler = () => {
    if (parentId) {
      setActiveMenuIds([parentId, id]);
    } else {
      setActiveMenuIds([id]);
    }

    if (isCollapsed) {
      setOpenedMenuId(null);
      return;
    }

    setOpenedMenuId(
      hasSubmenu && openedMenuId !== id
        ? id
        : null
    );
  };

  const onMouseEnterHandler = () => {
    if (!isCollapsed) {
      return;
    }

    if (isSubmenu) {
      return;
    }

    if (hasSubmenu) {
      setOpenedMenuId(id);
      return;
    }

    setOpenedMenuId(null);

    if (label) {
      setShowTooltip(true);
    }
  };

  const onMouseLeaveHandler = () => {
    setShowTooltip(false);
  };

  return (
    <div
      className={className}
      data-active={isActive}
    >
      {!isSubmenu && (
        <span
          onClick={onClickHandler}
          onMouseEnter={onMouseEnterHandler}
          onMouseLeave={onMouseLeaveHandler}
          className="menu"
        >
          {icon && <span>{icon}</span>}

          {label && !isCollapsed && (
            <span>{label}</span>
          )}
        </span>
      )}

      {showTooltip && (
        <div className="tooltip">
          {label}
        </div>
      )}

      {isSubmenu && (
        <span
          onClick={onClickHandler}
          className="submenuItem"
        >
          {icon && <span>{icon}</span>}
          {label && <span>{label}</span>}
        </span>
      )}

      {isOpen && (
        <SidebarSubmenu
          parentId={id}
          isOpen
          label={label}
        >
          {children}
        </SidebarSubmenu>
      )}
    </div>
  );
}
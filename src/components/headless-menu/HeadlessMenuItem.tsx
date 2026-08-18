import { Children, useState } from "react";
import { useHeadlessMenuContext } from "./hooks/useHeadlessMenuContext";
import { HeadlessMenuSubmenu } from "./HeadlessMenuSubmenu";
import type { HeadlessItemProps } from "./types/types";

export function HeadlessMenuItem({
  id,
  parentId,
  icon,
  label,
  className="",
  onSelect,
  children,
}: HeadlessItemProps) {
  const {
    isCollapsed,
    openedMenuId,
    setOpenedMenuId,
    activeMenuIds,
    setActiveMenuIds,
    styles,
  } = useHeadlessMenuContext();

  const [showTooltip, setShowTooltip] = useState(false);

  const hasSubmenu = Children.count(children) > 0;
  const isSubmenu = parentId !== undefined;
  const isActive = activeMenuIds.includes(id);

  const isOpen = hasSubmenu && openedMenuId === id;

  const onClickHandler = () => {
    console.log('!!!')
    if (parentId) {
      setActiveMenuIds([parentId, id]);
    } else {
      setActiveMenuIds([id]);
    }

    onSelect?.(id);

    if (isCollapsed) {
      setOpenedMenuId(null);
      return;
    }

    if (isSubmenu) {
      if (parentId) {
        setOpenedMenuId(parentId);
      }
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
    if (!isCollapsed) {
      return;
    }
  
    setShowTooltip(false);
  };

  const itemStyle = isSubmenu
    ? styles.submenuItem
    : hasSubmenu
      ? styles.group
      : styles.item;

  return (
    <div
      data-active={isActive}
      className={`${itemStyle ?? ""} ${className}`}
    >
      {!isSubmenu && (
        <div
          onClick={onClickHandler}
          onMouseEnter={onMouseEnterHandler}
          onMouseLeave={onMouseLeaveHandler}
          className="menu"
        >
          {icon && <span className="menu-icon">{icon}</span>}

          {label && !isCollapsed && (
            <span className="menu-label">{label}</span>
          )}
        </div>
      )}

      {showTooltip && (
        <div className="tooltip">
          {label}
        </div>
      )}

      {isSubmenu && (
        <div
          onClick={onClickHandler}
          className="submenu-item"
        >
          {icon && <span>{icon}</span>}
          {label && <span>{label}</span>}
        </div>
      )}

      {hasSubmenu && (
        <HeadlessMenuSubmenu
          parentId={id}
          isOpen={isOpen}
          label={label}
        >
          {children}
        </HeadlessMenuSubmenu>
      )}
    </div>
  );
}
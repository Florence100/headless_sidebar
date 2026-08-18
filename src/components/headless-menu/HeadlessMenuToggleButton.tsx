import type { ReactNode } from "react";
import { useHeadlessMenuContext } from "./hooks/useHeadlessMenuContext";

interface HeadlessMenuToggleButtonProps {
  expandedIcon?: ReactNode;
  collapsedIcon?: ReactNode;
  className?: string;
  children?: ReactNode;
}

export function HeadlessMenuToggleButton({
  expandedIcon,
  collapsedIcon,
  className,
  children
}: HeadlessMenuToggleButtonProps) {
  const { toggleCollapse, isCollapsed, styles } = useHeadlessMenuContext();

  return (
    <button
      type="button"
      onClick={toggleCollapse}
      className={`
        toggle
        ${styles.toggle ?? ""}
        ${className ?? ""}
      `}
      // className={`toggle ${className}`}
    >
      { children }
      { isCollapsed ? collapsedIcon : expandedIcon }
    </button>
  )
}
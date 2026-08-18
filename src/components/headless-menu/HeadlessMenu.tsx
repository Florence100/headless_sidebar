import type { ReactNode } from "react";
import { HeadlessMenuToggleButton } from "./HeadlessMenuToggleButton";
import { useHeadlessMenuContext } from "./hooks/useHeadlessMenuContext";

interface HeadlessMenuProps {
  children: ReactNode,
  expandedWidth?: string;
  collapsedWidth?: string;
  expandedIcon?: ReactNode;
  collapsedIcon?: ReactNode;
  toggleBtnValue?: string;
  className?: string;
}

export function HeadlessMenu ({
  children,
  expandedWidth="w-16",
  collapsedWidth="w-64",
  expandedIcon,
  collapsedIcon,
  toggleBtnValue,
  className="",
}: HeadlessMenuProps) {

  const { isCollapsed, styles } = useHeadlessMenuContext();

  return (
    <div 
      className={`
        ${styles.menu ?? ""}
        ${className}
        ${isCollapsed ? collapsedWidth : expandedWidth}
      `}
    >
      { children }
      
      <HeadlessMenuToggleButton expandedIcon={expandedIcon} collapsedIcon={collapsedIcon} >
        { toggleBtnValue }
      </HeadlessMenuToggleButton>
    </div>
  )
}
import type { ReactNode } from "react";

interface SidebarProps {
  children: ReactNode,
  activeId?: string,
  onActiveChange?: (id: string) => void;
  className?: string;
}

export function Sidebar ({
  children,
  // activeId,
  // onActiveChange,
  className = '',
}: SidebarProps) {
  return (
    <div className={className}>
      { children }
    </div>
  )
}
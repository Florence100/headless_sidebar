import type { ReactNode } from "react";

interface SidebarProps {
  children: ReactNode,
  className?: string;
}

export function Sidebar ({
  children,
  className = '',
}: SidebarProps) {
  return (
    <div className={className}>
      { children }
    </div>
  )
}
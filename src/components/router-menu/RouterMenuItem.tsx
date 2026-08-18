import { useEffect, type ReactNode } from "react";
import { HeadlessMenuItem } from "../headless-menu/HeadlessMenuItem";
import { useRouterMenuContext } from "./RouterMenuContext";
import { useRouterMenuGroupContext } from "./RouterMenuGroupContext";

interface RouterMenuItemProps {
  label: string;
  to: string;
  icon?: ReactNode;
  className?: string;
}

export function RouterMenuItem({
  label,
  to,
  icon,
  className = "",
}: RouterMenuItemProps) {
  const {
    navigate,
    registerNode,
    unregisterNode,
  } = useRouterMenuContext();

  const groupContext = useRouterMenuGroupContext();

  const id = to;

  useEffect(() => {
    registerNode({
      id,
      to,
      parentId: groupContext?.parentId,
    });

    return () => {
      unregisterNode(id);
    };
  }, [
    id,
    to,
    groupContext?.parentId,
    registerNode,
    unregisterNode,
  ]);

  const handleSelect = () => {
    navigate(to);
  };

  return (
    <HeadlessMenuItem
      id={id}
      label={label}
      icon={icon}
      className={className}
      onSelect={handleSelect}
      parentId={groupContext?.parentId}
    />
  );
}
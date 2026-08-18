import { useEffect, useId, type ReactNode} from "react";
import { HeadlessMenuItem } from "../headless-menu/HeadlessMenuItem";
import { RouterMenuGroupContext } from "./RouterMenuGroupContext";
import {
  useRouterMenuContext,
} from "./RouterMenuContext";

interface RouterMenuGroupProps {
  label: string;
  to?: string;
  icon?: ReactNode;
  className?: string;
  children: ReactNode;
}

export function RouterMenuGroup({
  label,
  to,
  icon,
  className = "",
  children,
}: RouterMenuGroupProps) {
  const {
    registerNode,
    unregisterNode,
    navigate,
  } = useRouterMenuContext();

  const generatedId = useId();
  const id = to ? to : generatedId;

  useEffect(() => {
    registerNode({
      id,
      to,
    });

    return () => {
      unregisterNode(id);
    };
  }, [id, to, registerNode, unregisterNode]);

  const handleSelect = () => {
    if (to) {
      navigate(to);
    }
  };

  return (
    <RouterMenuGroupContext.Provider
      value={{ parentId: id }}
    >
      <HeadlessMenuItem
        id={id}
        label={label}
        icon={icon}
        className={className}
        onSelect={handleSelect}
      >
        {children}
      </HeadlessMenuItem>
    </RouterMenuGroupContext.Provider>
  );
}
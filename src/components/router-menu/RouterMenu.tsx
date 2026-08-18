import {
  useCallback,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { useNavigate, useLocation, } from "react-router-dom";
import { HeadlessMenuProvider } from "../headless-menu/HeadlessMenuProvider";
import { HeadlessMenu } from "../headless-menu/HeadlessMenu";
import { RouterMenuContext } from "./RouterMenuContext";
import { RouterMenuGroup } from "./RouterMenuGroup";
import { RouterMenuItem } from "./RouterMenuItem";
import type { RouterMenuNode } from "./types/types";
import type { MenuStyles } from "../headless-menu/types/types";

interface RouterMenuProps {
  children: ReactNode;
  collapsed?: boolean;
  onCollapsedChange?: (collapsed: boolean) => void;
  expandedWidth?: string;
  collapsedWidth?: string;
  expandedIcon?: ReactNode;
  collapsedIcon?: ReactNode;
  toggleBtnValue?: string;
  styles?: MenuStyles;
  className?: string;
}

interface RouterMenuComponent {
  (
    props: RouterMenuProps,
  ): ReactNode;

  Item: typeof RouterMenuItem;
  Group: typeof RouterMenuGroup;
}

function getActiveIds(
  pathname: string,
  nodes: Map<string, RouterMenuNode>,
): string[] {
  const activeNode = [...nodes.values()]
    .find((node) => pathname === node.to);

  if (!activeNode) {
    return [];
  }

  const activeIds: string[] = [activeNode.id];

  let parentId = activeNode.parentId;

  while (parentId) {
    activeIds.unshift(parentId);

    const parent = nodes.get(parentId);

    if (!parent) {
      break;
    }

    parentId = parent.parentId;
  }

  return activeIds;
}

export const RouterMenu: RouterMenuComponent = ({
  children,
  collapsed,
  expandedWidth,
  collapsedWidth,
  onCollapsedChange,
  expandedIcon,
  collapsedIcon,
  toggleBtnValue,
  styles,
  className="",
}) => {
  const navigate = useNavigate();
  const location = useLocation();

  const [nodes, setNodes] = useState(
    new Map<string, RouterMenuNode>(),
  );

  const registerNode = useCallback((node: RouterMenuNode) => {
    setNodes((current) => {
      const next = new Map(current);
      next.set(node.id, node);
      return next;
    });
  }, []);

  const unregisterNode = useCallback((id: string) => {
    setNodes((current) => {
      const next = new Map(current);
      next.delete(id);
      return next;
    });
  }, []);

  const activeIds = useMemo(
    () => getActiveIds(location.pathname, nodes),
    [location.pathname, nodes],
  );

  const value = useMemo(
    () => ({
      navigate,
      registerNode,
      unregisterNode,
    }),
    [navigate, registerNode, unregisterNode],
  );

  return (
    <RouterMenuContext.Provider value={value}>
      <HeadlessMenuProvider
        collapsed={collapsed}
        onCollapsedChange={onCollapsedChange}
        activeIds={activeIds}
        styles={styles}
      >
        <HeadlessMenu 
          className={className} 
          expandedWidth={expandedWidth}
          collapsedWidth={collapsedWidth}
          expandedIcon={expandedIcon}
          collapsedIcon={collapsedIcon}
          toggleBtnValue={toggleBtnValue}
        >
          {children}
        </HeadlessMenu>
      </HeadlessMenuProvider>
    </RouterMenuContext.Provider>
  );
}

RouterMenu.Item = RouterMenuItem;
RouterMenu.Group = RouterMenuGroup;
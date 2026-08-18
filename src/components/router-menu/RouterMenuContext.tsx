import { createContext, useContext } from "react";
import type { NavigateFunction } from "react-router-dom";
import type { RouterMenuNode } from "./types/types";

export interface RouterMenuContextValue {
  navigate: NavigateFunction;
  registerNode(node: RouterMenuNode): void;
  unregisterNode(id: string): void;
}

export const RouterMenuContext =
  createContext<RouterMenuContextValue | null>(null);

export function useRouterMenuContext() {
  const context = useContext(RouterMenuContext);

  if (!context) {
    throw new Error(
      "useRouterMenuContext must be used inside RouterMenu",
    );
  }

  return context;
}
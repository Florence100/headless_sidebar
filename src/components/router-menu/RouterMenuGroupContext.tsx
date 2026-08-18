import { createContext, useContext } from "react";

interface RouterMenuGroupContextValue {
  parentId: string;
}

export const RouterMenuGroupContext =
  createContext<RouterMenuGroupContextValue | null>(null);

export function useRouterMenuGroupContext() {
  return useContext(RouterMenuGroupContext);
}
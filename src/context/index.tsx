import { PropsWithChildren } from "react";

import { AppContextProvider } from "./AppContext";

export const AppProvider = ({ children }: PropsWithChildren) => (
  <AppContextProvider>{children}</AppContextProvider>
);

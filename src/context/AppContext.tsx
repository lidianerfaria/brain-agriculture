import { createContext, PropsWithChildren, useState } from "react";

import { IAppContextProps } from "../utils/interfaces/context";
import {
  registerProducer,
  editProducer,
  deleteProducer,
} from "../services/api";

export const AppContext = createContext<IAppContextProps>(
  {} as IAppContextProps
);

export const AppContextProvider = ({ children }: PropsWithChildren) => {
  return (
    <AppContext.Provider
      value={{ registerProducer, editProducer, deleteProducer }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;

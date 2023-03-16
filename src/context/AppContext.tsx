import { createContext, PropsWithChildren, useState, useEffect } from "react";

import { IAppContextProps } from "../utils/interfaces/context";
import {
  registerProducer,
  editProducer,
  deleteProducer,
  api,
} from "../services/api";

export const AppContext = createContext<IAppContextProps>(
  {} as IAppContextProps
);

export const AppContextProvider = ({ children }: PropsWithChildren) => {
  const [form, setForm] = useState({});
  const [data, setData] = useState([]);

  function handleNewForm(data: any) {
    setForm(data);
    registerProducer(data);
  }

  async function handleData(): Promise<void> {
    const response = await api.get("/producer");
    setData(response.data);
  }

  useEffect(() => {
    handleData();
  }, []);

  return (
    <AppContext.Provider
      value={{
        registerProducer,
        editProducer,
        deleteProducer,
        handleNewForm,
        data,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;

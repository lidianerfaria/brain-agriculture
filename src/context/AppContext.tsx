import { createContext, PropsWithChildren, useState } from "react";

import { IAppContextProps } from "../utils/interfaces/context";
import {
  registerProducer,
  editProducer,
  deleteProducer,
  getProducer,
  api,
} from "../services/api";

export const AppContext = createContext<IAppContextProps>(
  {} as IAppContextProps
);

export const AppContextProvider = ({ children }: PropsWithChildren) => {
  const [form, setForm] = useState({}); //post
  const [data, setData] = useState([]);

  function handleNewForm(data: any) {
    setForm(data);
    registerProducer(data);
  }

  async function getProducer() {
    try {
      const response = await api.get("/producer");
      setData(response.data);
      console.log("data1", response.data);
    } catch (error) {
      console.error("Erro ao acessar produtor rural:", error);
    }
  }

  return (
    <AppContext.Provider
      value={{
        registerProducer,
        editProducer,
        deleteProducer,
        handleNewForm,
        getProducer,
        data,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;

import { createContext, PropsWithChildren, useState } from "react";

import { IAppContextProps } from "../utils/interfaces/context";
import {
  registerProducer,
  editProducer,
  deleteProducer,
  getProducer,
} from "../services/api";

export const AppContext = createContext<IAppContextProps>(
  {} as IAppContextProps
);

export const AppContextProvider = ({ children }: PropsWithChildren) => {
  const [form, setForm] = useState({});
  const [producers, setProducers] = useState([]);

  function handleFormData(data: any) {
    setForm(data);
    registerProducer(data);
  }

  function getFormData() {
    getProducer().then((data) => setProducers(data));
  }

  return (
    <AppContext.Provider
      value={{
        registerProducer,
        editProducer,
        deleteProducer,
        handleFormData,
        getFormData,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;

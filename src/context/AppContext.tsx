import { createContext, PropsWithChildren, useState, useEffect } from "react";

import { IAppContextProps } from "../utils/interfaces/context";
import {
  registerProducer,
  editProducer,
  deleteProducer,
  api,
} from "../services/api";
import { IRuralProducer } from "../utils";

export const AppContext = createContext<IAppContextProps>(
  {} as IAppContextProps
);

export const AppContextProvider = ({ children }: PropsWithChildren) => {
  const [form, setForm] = useState({}); //post
  const [data, setData] = useState([]); //todo alterar nome allProducers

  async function handleNewForm(data: any) {
    setForm(data);
    await registerProducer(data);
    await handleData();
  }

  async function handleData(): Promise<void> {
    //todo mudar nome da função para: getAllProducers
    const response = await api.get("/producer");
    setData(response.data);
  }

  async function handleDeleteProducer(id: number): Promise<void> {
    await deleteProducer(id);
    await handleData();
  }

  async function handleEditProducer(
    id: number,
    producer: IRuralProducer
  ): Promise<void> {
    await editProducer(id, producer);
    await handleData();
  }

  useEffect(() => {
    handleData();
  }, []);

  return (
    <AppContext.Provider
      value={{
        registerProducer,
        handleEditProducer,
        handleDeleteProducer,
        handleNewForm,
        data,
        handleData,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;

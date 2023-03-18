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
  const [form, setForm] = useState({});
  const [allProducers, setAllProducers] = useState([]);

  async function handleNewForm(data: any) {
    setForm(data);
    await registerProducer(data);
    await getAllProducers();
  }

  async function getAllProducers(): Promise<void> {
    const response = await api.get("/producer");
    setAllProducers(response.data);
  }

  async function handleDeleteProducer(id: number): Promise<void> {
    await deleteProducer(id);
    await getAllProducers();
  }

  async function handleEditProducer(
    id: number,
    producer: IRuralProducer
  ): Promise<void> {
    await editProducer(id, producer);
    await getAllProducers();
  }

  useEffect(() => {
    getAllProducers();
  }, []);

  return (
    <AppContext.Provider
      value={{
        registerProducer,
        handleEditProducer,
        handleDeleteProducer,
        handleNewForm,
        allProducers,
        getAllProducers,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;

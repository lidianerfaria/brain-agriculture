import {
  createContext,
  PropsWithChildren,
  useState,
  useEffect,
  useMemo,
} from "react";

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
  const [allProducers, setAllProducers] = useState<IRuralProducer[]>([]);

  async function handleNewForm(data: any) {
    await registerProducer(data);
    getAllProducers();
  }

  async function getAllProducers() {
    const response = await api.get("/producer");
    setAllProducers(response.data);
  }

  async function handleDeleteProducer(id: number) {
    await deleteProducer(id);
    getAllProducers();
  }

  async function handleEditProducer(id: number, producer: IRuralProducer) {
    await editProducer(id, producer);
    getAllProducers();
  }

  useEffect(() => {
    getAllProducers();
  }, []);

  const contextValue = useMemo(() => {
    return {
      registerProducer,
      handleEditProducer,
      handleDeleteProducer,
      handleNewForm,
      allProducers,
      getAllProducers,
    };
  }, [allProducers]);

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};

export default AppContext;

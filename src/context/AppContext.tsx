import { createContext, PropsWithChildren } from "react";
import { IRuralProducer } from "../utils";
import { IAppContextProps } from "../utils/interfaces/context";
import { api } from "../utils";

export const AppContext = createContext<IAppContextProps>(
  {} as IAppContextProps
);

export const AppContextProvider = ({ children }: PropsWithChildren) => {
  function doSomething() {
    console.log("Do something");
  }

  async function registerProducer(producer: IRuralProducer) {
    try {
      const response = await api.post("/producer", producer);
      console.log("Produtor rural cadastrado:", response.data);
    } catch (error) {
      console.error("Erro ao cadastrar produtor rural:", error);
    }
  }

  async function editProducer(producer: IRuralProducer) {
    try {
      const response = await api.put(
        `/producer/${producer.cpfOrCnpj}`,
        producer
      );
      console.log("Produtor rural editado:", response.data);
    } catch (error) {
      console.error("Erro ao editar produtor rural:", error);
    }
  }

  async function deleteProducer(cpfOrCnpj: string) {
    try {
      const response = await api.delete(`/producer/${cpfOrCnpj}`);
      console.log("Produtor rural excluído:", response.data);
    } catch (error) {
      console.error("Erro ao excluir produtor rural:", error);
    }
  }

  return (
    <AppContext.Provider
      value={{
        doSomething,
        registerProducer,
        editProducer,
        deleteProducer,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;

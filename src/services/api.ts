import axios from "axios";
import { IRuralProducer } from "../utils/interfaces";


export const api = axios.create({
  baseURL: "localhost:3333",
});

export async function registerProducer(producer: IRuralProducer) {
  try {
    const response = await api.post("/producer", producer);
    console.log("Produtor rural cadastrado:", response.data);
  } catch (error) {
    console.error("Erro ao cadastrar produtor rural:", error);
  }
}

export async function editProducer(producer: IRuralProducer) {
  try {
    const response = await api.put(`/producer/${producer.cpfOrCnpj}`, producer);
    console.log("Produtor rural editado:", response.data);
  } catch (error) {
    console.error("Erro ao editar produtor rural:", error);
  }
}

export async function deleteProducer(cpfOrCnpj: string) {
  try {
    const response = await api.delete(`/producer/${cpfOrCnpj}`);
    console.log("Produtor rural excluído:", response.data);
  } catch (error) {
    console.error("Erro ao excluir produtor rural:", error);
  }
}

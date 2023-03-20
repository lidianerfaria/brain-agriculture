import axios from "axios";
import { IRuralProducer } from "../utils/interfaces";

export const api = axios.create({
  baseURL: "http://localhost:3333",
});

export async function registerProducer(producer: IRuralProducer) {
  try {
    const response = await api.post("/producer", producer);
    console.log("Produtor rural cadastrado com sucesso:", response.data);
  } catch (error) {
    console.error("Erro ao cadastrar produtor rural:", error);
  }
}

export async function getProducer() {
  try {
    const response = await api.get("/producer");
    console.log("Produtores rurais cadastrados:", response.data);
  } catch (error) {
    console.error("Erro ao acessar produtor rural:", error);
  }
}

export async function getOneProducer(id: number) {
  try {
    const response = await api.get(`/producer/${id}`);
    return response.data;
  } catch (error) {
    console.error("Erro ao editar produtor rural:", error);
  }
}

export async function editProducer(id: number, producer: IRuralProducer) {
  try {
    const response = await api.put(`/producer/${id}`, producer);
    console.log("Produtor rural editado com sucesso:", response.data);
  } catch (error) {
    console.error("Erro ao editar produtor rural:", error);
  }
}

export async function deleteProducer(id: number) {
  try {
    const response = await api.delete(`/producer/${id}`);
    console.log("Produtor rural excluído com sucesso:", response.data);
  } catch (error) {
    console.error("Erro ao excluir produtor rural:", error);
  }
}

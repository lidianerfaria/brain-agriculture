import { IRuralProducer } from "../api";

export interface IFarmerProps {
  id: number;
  cpfOrCnpj: string;
  producerName: string;
  farmName: string;
  city: string;
  state: string;
  totalArea: number;
  arableArea: number;
  vegetationArea: number;
  crops: string[];
}
export interface IAppContextProps {
  registerProducer: (producer: IRuralProducer) => Promise<void>;
  handleEditProducer: (id: number, producer: IRuralProducer) => Promise<void>;
  handleDeleteProducer: (id: number) => Promise<void>;
  handleNewForm: (data: any) => void;
  getAllProducers: () => void;
  allProducers: any;
}

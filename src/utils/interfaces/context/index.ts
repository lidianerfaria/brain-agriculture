import { IRuralProducer } from "../api";

export interface IAppContextProps {
  registerProducer: (producer: IRuralProducer) => Promise<void>;
  editProducer: (producer: IRuralProducer) => Promise<void>;
  deleteProducer: (cpfOrCnpj: string) => Promise<void>;
  handleNewForm: (data: any) => void;
  getProducer: () => Promise<void>;
  data: any;
}

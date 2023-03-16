export interface IRuralProducer {
  cpfOrCnpj: string;
  producerName: string;
  farmName: string;
  city: string;
  state: string;
  totalArea: number;
  arableArea: number;
  vegetationArea: number;
  crops: [];
}

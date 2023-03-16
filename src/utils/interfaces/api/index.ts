export interface IRuralProducer {
  cpfOrCnpj: string;
  fullName: string;
  farmName: string;
  city: string;
  state: string;
  totalArea: number;
  arableArea: number;
  vegetationArea: number;
  crops: [];
}

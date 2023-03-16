import { IProducersLayout } from "./data";
import { Producers as Layout } from "./Layout";

export const Producers = ({ ...props }: IProducersLayout) => {
  return <Layout {...props} />;
};

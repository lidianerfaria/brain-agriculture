import { IChartsLayout } from "./data";
import { Charts as Layout } from "./Layout";

export const Charts = ({ ...props }: IChartsLayout) => {
  return <Layout {...props} />;
};

import { IStateChartLayout } from "./data";
import { StateChart as Layout } from "./Layout";

export const StateChart = ({ ...props }: IStateChartLayout) => {
  return <Layout {...props} />;
};

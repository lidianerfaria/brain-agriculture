import { IGroundChartLayout } from "./data";
import { GroundChart as Layout } from "./Layout";

export const GroundChart = ({ ...props }: IGroundChartLayout) => {
  return <Layout {...props} />;
};

import { ICropChartLayout } from "./data";
import { CropChart as Layout } from "./Layout";

export const CropChart = ({ ...props }: ICropChartLayout) => {
  return <Layout {...props} />;
};

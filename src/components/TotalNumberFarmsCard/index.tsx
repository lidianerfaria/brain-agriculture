import { ITotalNumberFarmsCardLayout } from "./data";
import { TotalNumberFarmsCard as Layout } from "./Layout";

export const TotalNumberFarmsCard = ({
  ...props
}: ITotalNumberFarmsCardLayout) => {
  return <Layout {...props} />;
};

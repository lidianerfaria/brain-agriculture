import { ITotalHectaresFarmsCardLayout } from "./data";
import { TotalHectaresFarmsCard as Layout } from "./Layout";

export const TotalHectaresFarmsCard = ({
  ...props
}: ITotalHectaresFarmsCardLayout) => {
  return <Layout {...props} />;
};

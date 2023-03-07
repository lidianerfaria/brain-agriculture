import { ITabLayout } from "./data";
import { Tab as Layout } from "./Layout";

export const Tab = ({ ...props }: ITabLayout) => {
  return <Layout {...props} />;
};

import { ITabTitleLayout } from "./data";
import { TabTitle as Layout } from "./Layout";

export const TabTitle = ({ ...props }: ITabTitleLayout) => {
  return <Layout {...props} />;
};

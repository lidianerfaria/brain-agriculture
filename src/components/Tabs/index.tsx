import { ITabsLayout } from "./data";
import { Tabs as Layout } from "./Layout";

export const Tabs = ({ ...props }: ITabsLayout) => {
  return <Layout {...props} />;
};

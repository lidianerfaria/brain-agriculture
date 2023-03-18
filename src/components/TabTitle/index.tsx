import { ITabTitleLayout } from "./data";
import { TabTitle as Layout } from "./Layout";

export const TabTitle = ({
  setSelectedTab,
  index,
  ...props
}: ITabTitleLayout) => {
  const layoutProps = {
    ...props,
  };
  return (
    <Layout index={index} setSelectedTab={setSelectedTab} {...layoutProps} />
  );
};

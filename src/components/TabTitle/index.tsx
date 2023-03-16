import { ITabTitleLayout } from "./data";
import { TabTitle as Layout } from "./Layout";

export const TabTitle = ({
  setSelectedTab,
  index,
  ...props
}: ITabTitleLayout) => {
  function handleClick() {
    setSelectedTab(index);
  }

  const layoutProps = {
    ...props,
    handleClick,
  };
  return (
    <Layout index={index} setSelectedTab={setSelectedTab} {...layoutProps} />
  );
};

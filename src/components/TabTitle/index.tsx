import { useContext } from "react";
import AppContext from "../../context/AppContext";
import { ITabTitleLayout } from "./data";
import { TabTitle as Layout } from "./Layout";

export const TabTitle = ({
  setSelectedTab,
  index,
  ...props
}: ITabTitleLayout) => {
  const { getFormData } = useContext(AppContext);

  function handleClick() {
    getFormData();
    setSelectedTab(index);
  }

  const layoutProps = {
    ...props,
    handleClick,
  };
  return <Layout {...layoutProps} />;
};

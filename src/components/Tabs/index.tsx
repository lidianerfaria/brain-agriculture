import { ITabs } from "./data";
import { Tabs as Layout } from "./Layout";
import { useState } from "react";

export const Tabs = ({ ...props }: ITabs) => {
  const [selectedTab, setSelectedTab] = useState<number>(0);

  const layoutProps = {
    ...props,
    selectedTab,
    setSelectedTab,
  };

  return <Layout {...layoutProps} />;
};

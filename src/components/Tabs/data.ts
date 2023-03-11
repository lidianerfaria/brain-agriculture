import { ReactElement } from "react";

export interface ITabsLayout {
  children: ReactElement[];
  selectedTab: number;
  setSelectedTab: (index: number) => number;
}

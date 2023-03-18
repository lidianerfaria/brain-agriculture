import { ReactElement } from "react";

export interface ITabs {
  children: ReactElement[];
}

export interface ITabsLayout extends ITabs {
  setSelectedTab: React.Dispatch<React.SetStateAction<number>>;
  selectedTab: number;
}

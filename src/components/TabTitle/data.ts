export interface ITabTitleLayout {
  title: string;
  index: number;
  setSelectedTab: (index: number) => number;
  handleClick: (index: number) => void;
}

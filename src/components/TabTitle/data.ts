export interface ITabTitleLayout {
  title: string;
  index: number;
  setSelectedTab: React.Dispatch<React.SetStateAction<number>>;
  handleClick?: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
}

import { ReactNode } from "react";

export interface ITabLayout {
  title?: string;
  children?: ReactNode;
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
}

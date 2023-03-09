import { ITabTitleLayout } from "../data";

import S from "./styles";

export const TabTitle = ({
  index,
  setSelectedTab,
  title,
  ...props
}: ITabTitleLayout) => {
  return (
    <li {...props}>
      <S.Button onClick={() => setSelectedTab(index)}>{title}</S.Button>
    </li>
  );
};

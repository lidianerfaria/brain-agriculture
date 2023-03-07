import { ITabTitleLayout } from "../data";

import S from "./styles";

export const TabTitle = ({
  title,
  setSelectedTab,
  index,
  ...props
}: ITabTitleLayout) => {
  return (
    <S.Container {...props}>
      <S.Button onClick={() => setSelectedTab(index)}>{title}</S.Button>
    </S.Container>
  );
};

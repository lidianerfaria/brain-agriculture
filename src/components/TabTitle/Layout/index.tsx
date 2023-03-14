import { ITabTitleLayout } from "../data";

import S from "./styles";

export const TabTitle = ({ handleClick, title, ...props }: ITabTitleLayout) => {
  return (
    <li {...props}>
      <S.Button onClick={handleClick}>{title}</S.Button>
    </li>
  );
};

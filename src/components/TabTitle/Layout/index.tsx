import { ITabTitleLayout } from "../data";

import S from "./styles";

export const TabTitle = ({ title, ...props }: ITabTitleLayout) => {
  function handleClick() {
    props.setSelectedTab(props.index);
  }

  return (
    <li>
      <S.Button onClick={handleClick}>{title}</S.Button>
    </li>
  );
};

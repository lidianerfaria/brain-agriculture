import { ITabLayout } from "../data";

import S from "./styles";

export const Tab = ({ children, ...props }: ITabLayout) => {
  return <S.Container {...props}>{children}</S.Container>;
};

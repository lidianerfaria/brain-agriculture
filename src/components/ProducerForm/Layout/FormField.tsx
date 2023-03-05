import { IProducerForm } from "../data";

import S from "./styles";

export const FormField = (props: IProducerForm) => {
  return <S.Container {...props}></S.Container>;
};

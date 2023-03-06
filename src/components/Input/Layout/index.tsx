import { IInputLayout } from "../data";

import S from "./styles";

export const Input = (props: IInputLayout) => {
  return (
    <S.InputGroup {...props}>
      <label>{props.label}</label>
      <S.Input />
      {props.hasError ? <p>{props.errorMessage}</p> : null}
    </S.InputGroup>
  );
};

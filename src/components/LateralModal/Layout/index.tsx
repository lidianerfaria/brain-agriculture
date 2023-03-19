import { ILateralModal } from "../data";
import { IoMdClose } from "react-icons/io";

import S from "./styles";
import { Form } from "../../../components";

export const LateralModal = ({ ...props }: ILateralModal) => {
  return (
    <S.Container {...props}>
      <S.Header>
        <S.Title>Novo cadastro</S.Title>
        <IoMdClose onClick={props.closeModal} />
      </S.Header>
      <Form closeModal={props.closeModal} />
    </S.Container>
  );
};

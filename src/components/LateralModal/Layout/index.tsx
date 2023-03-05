import { ILateralModal } from "../data";
import { IoMdClose } from "react-icons/io";
// import { ProducerForm } from "../../index";

import S from "./styles";

export const LateralModal = (props: ILateralModal) => {
  return (
    <S.Container {...props}>
      <S.Header>
        <S.Title>Novo cadastro</S.Title>
        <IoMdClose />
      </S.Header>

      <S.Button>Salvar novo cadastro</S.Button>
    </S.Container>
  );
};

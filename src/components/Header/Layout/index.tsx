import { useState } from "react";
import { IHeader } from "../data";
import { BsPlusCircle } from "react-icons/bs";
import S from "./styles";
import { LateralModal } from "../../../components";

export const Header = (props: IHeader) => {
  const [open, setOpen] = useState(false);

  function handleCloseModal() {
    setOpen(false);
  }

  return (
    <S.Container {...props}>
      <S.Text>Brain Agriculture</S.Text>
      <S.Button onClick={() => setOpen(true)}>
        <BsPlusCircle />
        Novo cadastro
      </S.Button>
      {open && <LateralModal closeModal={handleCloseModal} />}
    </S.Container>
  );
};

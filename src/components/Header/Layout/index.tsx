import { IHeader } from "../data";
import { BsPlusCircle } from "react-icons/bs";
import S from "./styles";
import { LateralModal } from "../../../components";

export const Header = ({
  handleCloseModal,
  open,
  setOpen,
  ...props
}: IHeader) => {
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

import { IHeader } from "../data";
import { BsPlusCircle } from "react-icons/bs";
import S from "./styles";

export const Header = (props: IHeader) => (
  <S.Container {...props}>
    <S.Text>Brain Agriculture</S.Text>
    <S.Button>
      <BsPlusCircle />
      Novo Cadastro
    </S.Button>
  </S.Container>
);

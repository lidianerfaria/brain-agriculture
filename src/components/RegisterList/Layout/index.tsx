import { IRegisterListLayout } from "../data";
import { MdEdit } from "react-icons/md";
import { AiFillDelete } from "react-icons/ai";

import S from "./styles";

export const RegisterList = ({ ...props }: IRegisterListLayout) => {
  return (
    <S.Container {...props}>
      <S.ListTitle>Edite seus cadastros</S.ListTitle>
      <S.ListItemWrapper>
        <S.ListItem>
          <S.WrapperLeft>
            <S.InfoWrapper>
              <S.ProducerName>Lidiane Faria</S.ProducerName>
              <S.ProducerCpf>000.000.000-00</S.ProducerCpf>
            </S.InfoWrapper>
          </S.WrapperLeft>
          <S.WrapperRight>
            <S.Wrapper>
              <MdEdit />
              <AiFillDelete />
            </S.Wrapper>
          </S.WrapperRight>
        </S.ListItem>
      </S.ListItemWrapper>
    </S.Container>
  );
};

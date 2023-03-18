import { useContext } from "react";
import { MdEdit } from "react-icons/md";
import { AiFillDelete } from "react-icons/ai";
import AppContext from "../../../context/AppContext";
import S from "./styles";
import { IFarmerProps } from "../../../utils";

export const Producers = () => {
  const { data, handleDeleteProducer } = useContext(AppContext);

  return (
    <S.Container>
      <S.ListTitle>Edite seus cadastros</S.ListTitle>
      {data.map((item: IFarmerProps) => (
        <S.ListItemWrapper key={item.id}>
          <S.ListItem>
            <S.WrapperLeft>
              <S.InfoWrapper>
                <S.ProducerName>{item.producerName}</S.ProducerName>
                <S.ProducerCpf>{item.cpfOrCnpj}</S.ProducerCpf>
              </S.InfoWrapper>
            </S.WrapperLeft>
            <S.WrapperRight>
              <S.Wrapper>
                <button>
                  <MdEdit />
                </button>
                <button onClick={() => handleDeleteProducer(item.id)}>
                  <AiFillDelete />
                </button>
              </S.Wrapper>
            </S.WrapperRight>
          </S.ListItem>
        </S.ListItemWrapper>
      ))}
    </S.Container>
  );
};

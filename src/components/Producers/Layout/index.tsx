import { useContext, useState } from "react";
import { MdEdit } from "react-icons/md";
import { AiFillDelete } from "react-icons/ai";
import AppContext from "../../../context/AppContext";
import S from "./styles";
import { IFarmerProps } from "../../../utils";
import { LateralModal } from "../../LateralModal";

export const Producers = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [producerId, setProducerId] = useState<number>(0);

  const { allProducers, handleDeleteProducer } = useContext(AppContext);

  function handleCloseModal() {
    setOpen(false);
  }

  const handleOpenModal = (id: number) => {
    setOpen(true);
    setProducerId(id);
  };

  return (
    <S.Container>
      <S.ListTitle>Edite seus cadastros</S.ListTitle>
      {allProducers.map((item: IFarmerProps) => (
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
                <button onClick={() => handleOpenModal(item.id)}>
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
      {open && <LateralModal _id={producerId} closeModal={handleCloseModal} />}
    </S.Container>
  );
};

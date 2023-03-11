import { IProducerForm } from "../data";
import S from "./styles";

export const Form = ({
  schema,
  register,
  onSubmit,
  errors,
  handleSubmit,
  ...props
}: IProducerForm) => {
  return (
    <S.Container>
      <form onSubmit={onSubmit(handleSubmit)} {...props}>
        <S.InputGroup>
          <label htmlFor="cpfOrCnpj">CPF ou CNPJ</label>
          <input
            type="text"
            id="cpfOrCnpj"
            placeholder="Digite o CPF ou CNPJ"
            {...register("cpfOrCnpj")}
          />
          <span>{errors?.cpfOrCnpj?.message}</span>
        </S.InputGroup>
        <S.InputGroup>
          <label htmlFor="producerName">Nome do(a) Produtor(a)</label>
          <input
            type="text"
            id="producerName"
            placeholder="Digite o nome do(a) Produtor(a)"
            {...register("producerName")}
          />
          <span>{errors?.producerName?.message}</span>
        </S.InputGroup>
        <S.InputGroup>
          <label htmlFor="farmName">Nome da Fazenda</label>
          <input
            type="text"
            id="farmName"
            placeholder="Digite o nome da Fazenda"
            {...register("farmName")}
          />
          <span>{errors?.farmName?.message}</span>
        </S.InputGroup>
        <S.InputGroup>
          <label htmlFor="city">Cidade</label>
          <input
            type="text"
            id="city"
            placeholder="Digite o nome da cidade"
            {...register("city")}
          />
          <span>{errors?.city?.message}</span>
        </S.InputGroup>
        <S.InputGroup>
          <label htmlFor="state">Estado</label>
          <input
            type="text"
            id="state"
            placeholder="Insira o estado"
            {...register("state")}
          />
          <span>{errors?.state?.message}</span>
        </S.InputGroup>
        <S.InputGroup>
          <label htmlFor="totalArea">Área Total</label>
          <input
            type="text"
            id="totalArea"
            placeholder="Insira a área total da Fazenda em hectares"
            {...register("totalArea")}
          />
          <span>{errors?.totalArea?.message}</span>
        </S.InputGroup>
        <S.InputGroup>
          <label htmlFor="arableArea">Área Agricultável</label>
          <input
            type="text"
            id="arableArea"
            placeholder="Insira a área agricultável da Fazenda em hectares"
            {...register("arableArea")}
          />
          <span>{errors?.arableArea?.message}</span>
        </S.InputGroup>
        <S.InputGroup>
          <label htmlFor="vegetationArea">Área de Vegetação</label>
          <input
            type="text"
            id="producerName"
            placeholder="Insira a área de vegetação da Fazenda em hectares"
            {...register("vegetationArea")}
          />
          <span>{errors?.vegetationArea?.message}</span>
        </S.InputGroup>
        <S.Button type="submit">Salvar novo cadastro</S.Button>
      </form>
    </S.Container>
  );
};

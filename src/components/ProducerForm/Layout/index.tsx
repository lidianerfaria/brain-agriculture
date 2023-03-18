import React from "react";
import { IProducerForm } from "../data";
import S from "./styles";

export const Form = ({
  schema,
  register,
  onSubmit,
  errors,
  handleSubmit,
  closeModal,
  id,
}: IProducerForm) => {
  return (
    <S.Container>
      <form onSubmit={handleSubmit(onSubmit)}>
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
          <label htmlFor="producerName">Nome</label>
          <input
            type="text"
            id="producerName"
            placeholder="Nome do(a) Produtor(a)"
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
            placeholder="Insira o Estado"
            {...register("state")}
          />
          <span>{errors?.state?.message}</span>
        </S.InputGroup>
        <S.InputGroup>
          <label htmlFor="arableArea">Área Agricultável</label>
          <input
            type="number"
            id="arableArea"
            placeholder="Área em hectares"
            {...register("arableArea")}
          />
          <span>{errors?.arableArea?.message}</span>
        </S.InputGroup>
        <S.InputGroup>
          <label htmlFor="vegetationArea">Área de Vegetação</label>
          <input
            type="number"
            id="vegetationArea"
            placeholder="Área em hectares"
            {...register("vegetationArea")}
          />
          <span>{errors?.vegetationArea?.message}</span>
        </S.InputGroup>
        <S.InputGroup>
          <label htmlFor="totalArea">Área Total</label>
          <input
            type="number"
            id="totalArea"
            placeholder="Área em hectares"
            {...register("totalArea")}
          />
          <span>{errors?.totalArea?.message}</span>
        </S.InputGroup>

        <S.InputGroup>
          <p>Culturas Plantadas</p>
          <S.CheckboxWrap>
            <input
              type="checkbox"
              id="customCheckbox"
              value="Soja"
              {...register("customCheckbox")}
            />
            <label>Soja</label>
          </S.CheckboxWrap>

          <S.CheckboxWrap>
            <input
              type="checkbox"
              id="customCheckbox"
              value="Milho"
              {...register("customCheckbox")}
            />
            <label>Milho</label>
          </S.CheckboxWrap>
          <S.CheckboxWrap>
            <input
              type="checkbox"
              id="customCheckbox"
              value="Algodão"
              {...register("customCheckbox")}
            />
            <label>Algodão</label>
          </S.CheckboxWrap>
          <S.CheckboxWrap>
            <input
              type="checkbox"
              id="customCheckbox"
              value="Café"
              {...register("customCheckbox")}
            />
            <label>Café</label>
          </S.CheckboxWrap>
          <S.CheckboxWrap>
            <input
              type="checkbox"
              id="customCheckbox"
              value="Cana de Açúcar"
              {...register("customCheckbox")}
            />
            <label>Cana de Açúcar</label>
          </S.CheckboxWrap>
          <span>{errors?.customCheckbox?.message}</span>
        </S.InputGroup>

        <S.Button type="submit">Salvar</S.Button>
      </form>
    </S.Container>
  );
};

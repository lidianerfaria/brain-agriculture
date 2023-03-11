import { IProducerForm } from "../data";
import { Input } from "../../../components";

import { Formik, Form as FormikForm } from "formik";
import S from "./styles";

export const Form = ({
  validationSchema,
  initialValues,
  handleSubmit,
  handleInputChange,
  cpfOrCnpj,
  ...props
}: IProducerForm) => {
  return (
    <S.Container {...props}>
      <Formik
        initialValues={initialValues}
        onSubmit={handleInputChange}
        validationSchema={validationSchema}
      >
        {({ errors, handleChange, values }) => {
          return (
            <FormikForm>
              <Input
                label="CPF ou CNPJ"
                errorMessage="CPF ou CNPJ inválido."
                hasError={!!errors.cpfOrCnpj}
                name={cpfOrCnpj}
                onChange={handleChange("cpfOrCnpj")}
                placeholder="teste"
                value={values.cpfOrCnpj}
              />
              <Input
                label="Nome do(a) Produtor(a)"
                errorMessage={errors.producerName}
                hasError={!!errors.producerName}
                name="producerName"
                onChange={handleChange("producerName")}
                value={values.producerName}
              />
              <Input
                label="Nome da Fazenda"
                errorMessage={errors.farmName}
                hasError={!!errors.farmName}
                name="farmName"
                onChange={handleChange("farmName")}
                value={values.farmName}
              />
              <Input
                label="Cidade"
                errorMessage={errors.city}
                hasError={!!errors.city}
                name="city"
                onChange={handleChange("city")}
                value={values.city}
              />
              <Input
                label="Estado"
                errorMessage={errors.state}
                hasError={!!errors.state}
                name="state"
                onChange={handleChange("state")}
                value={values.state}
              />
              <Input
                label="Área Total"
                errorMessage={errors.totalArea}
                hasError={!!errors.totalArea}
                name="totalArea"
                onChange={handleChange("totalArea")}
                value={values.totalArea}
              />
              <Input
                label="Área Agricultável"
                errorMessage={errors.arableArea}
                hasError={!!errors.arableArea}
                name="arableArea"
                onChange={handleChange("arableArea")}
                value={values.arableArea}
              />
              <Input
                label="Área de Vegetação"
                errorMessage={errors.vegetationArea}
                hasError={!!errors.vegetationArea}
                name="vegetationArea"
                onChange={handleChange("vegetationArea")}
                value={values.vegetationArea}
              />
              <S.Button type="submit">Salvar novo cadastro</S.Button>
            </FormikForm>
          );
        }}
      </Formik>
    </S.Container>
  );
};

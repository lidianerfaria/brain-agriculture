import { IProducerForm } from "../data";
import { Input } from "../../../components";
import { useState } from "react";
import * as yup from "yup";
import {
  Formik,
  Form as FormikForm,
  useFormikContext,
  FormikHelpers,
} from "formik";
import S from "./styles";

export const Form = (props: IProducerForm) => {
  const [cpfOrCnpj, setCpfOrCnpj] = useState("");
  const [producerName, setProducerName] = useState("");
  const [farmName, setFarmName] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [totalArea, setTotalArea] = useState("");
  const [arableArea, setArableArea] = useState("");
  const [vegetationArea, setVegetationArea] = useState("");
  const [input, setInput] = useState({
    cpfOrCnpj,
    producerName,
    farmName,
    city,
    state,
    totalArea,
    arableArea,
    vegetationArea,
  });

  // const handleInputChange = (fieldName: string, value: string) => {
  //   setInput((prevState) => ({
  //     ...prevState,
  //     [fieldName]: value,
  //   }));
  // };

  const initialValues = {
    cpfOrCnpj: "",
    producerName: "",
    farmName: "",
    city: "",
    state: "",
    totalArea: "",
    arableArea: "",
    vegetationArea: "",
  };

  const handleSubmit = (
    values: typeof initialValues,
    actions: FormikHelpers<typeof initialValues>
  ) => {
    // Send a POST request using fetch to the mock API
    fetch("http://localhost:3000/producers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        // If you want to simulate an error,
        // uncomment the lines below and set hasError and errorMessage accordingly.
        const hasError = true;
        const errorMessage = "Something went wrong";
        if (hasError) {
          actions.setFieldError("cpfOrCnpj", "campo não preenchido");
        }
        actions.resetForm();
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const validationSchema = yup.object().shape({
    name: yup.string().required(),
    producerName: yup.string().required(),
    farmName: yup.string().required(),
    city: yup.string().required(),
    state: yup.string().required(),
    totalArea: yup.number().required(),
    arableArea: yup.number().required(),
    vegetationArea: yup.number().required(),
  });

  return (
    <S.Container {...props}>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        {({ errors, handleChange, touched, values }) => (
          <FormikForm>
            <Input
              label="CPF ou CNPJ"
              errorMessage="CPF ou CNPJ inválido."
              hasError={!!errors.cpfOrCnpj}
              name="cpfOrCnpj"
              onChange={handleChange}
              placeholder="teste"
              value={values.cpfOrCnpj}
            />
            <Input
              label="Nome do(a) Produtor(a)"
              errorMessage="Este campo é obrigatório."
              hasError={!!errors.producerName}
              name="producerName"
              onChange={handleChange}
              value={values.producerName}
            />
            <Input
              label="Nome da Fazenda"
              errorMessage="Este campo é obrigatório."
              hasError={!!errors.farmName}
              name="farmName"
              onChange={handleChange}
              value={values.farmName}
            />
            <Input
              label="Cidade"
              errorMessage="Este campo é obrigatório."
              hasError={!!errors.city}
              name="city"
              onChange={handleChange}
              value={values.city}
            />
            <Input
              label="Estado"
              errorMessage="Este campo é obrigatório."
              hasError={!!errors.state}
              name="state"
              onChange={handleChange}
              value={values.state}
            />
            <Input
              label="Área Total"
              errorMessage="Este campo é obrigatório."
              hasError={!!errors.totalArea}
              name="totalArea"
              onChange={handleChange}
              value={values.totalArea}
            />
            <Input
              label="Área Agricultável"
              errorMessage="Este campo é obrigatório."
              hasError={!!errors.arableArea}
              name="arableArea"
              onChange={handleChange}
              value={values.arableArea}
            />
            <Input
              label="Área de Vegetação"
              errorMessage="Este campo é obrigatório."
              hasError={!!errors.vegetationArea}
              name="vegetationArea"
              onChange={handleChange}
              value={values.vegetationArea}
            />
            <S.Button type="submit">Salvar novo cadastro</S.Button>
          </FormikForm>
        )}
      </Formik>
    </S.Container>
  );
};

import { IProducerForm } from "./data";
import { Form as Layout } from "./Layout";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import * as Yup from "yup";

export const Form = ({ ...props }: IProducerForm) => {
  const cpfCnpjRegex =
    /^((\d{3}\.?\d{3}\.?\d{3}\-?\d{2})|(\d{2}\.?\d{3}\.?\d{3}\/?\d{4}\-?\d{2}))$/;

  const schema = Yup.object().shape({
    cpfOrCnpj: Yup.string()
      .required("Campo obrigatório.")
      .matches(cpfCnpjRegex, "CPF ou CNPJ inválido."),
    name: Yup.string().required("Campo obrigatório."),
    producerName: Yup.string().required("Campo obrigatório."),
    farmName: Yup.string().required("Campo obrigatório."),
    city: Yup.string().required("Campo obrigatório."),
    state: Yup.string().required("Campo obrigatório."),
    arableArea: Yup.number()
      .required("Campo obrigatório.")
      .positive("Número inválido."),
    vegetationArea: Yup.number()
      .required("Campo obrigatório.")
      .positive("Número inválido."),
    totalArea: Yup.number()
      .required("Campo obrigatório.")
      .positive("Número inválido.")
      .test(
        "sum-equals-total",
        "A soma de Área Agricultável e Vegetação não deve ser maior que a Área Total da Fazenda.",
        function (value) {
          const { arableArea, vegetationArea } = this.parent;
          return arableArea + vegetationArea < value;
        }
      ),
  });

  const {
    register,
    handleSubmit: onSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const handleSubmit = (data: any) => {
    console.log(data);
  };

  const layoutProps = {
    ...props,
    schema,
    register,
    onSubmit,
    errors,
    handleSubmit,
  };

  return <Layout {...layoutProps} />;
};
